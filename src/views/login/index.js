import React, { useState, useEffect } from "react";
import { ScrollView, VStack, HStack, Image, Text, Link } from "native-base";
import { TextInput, Button, HelperText, Snackbar } from "react-native-paper";
import styles from "./style";
import constantes from "../../constantes/constantes";
import { storeData } from "../../utils/utils.js";
import { useUser } from "../../store/UserProvider";
import axios from "axios";
const Login = (props) => {
  const [change, setChange] = useState(true);
  const [token, setToken] = useState({ usrCorreo: "", usrPassword: "" });
  const [visible, setVisible] = useState(false);
  const [httpError, setHttpError] = useState("");
  const [interaction, setInteration] = useState(false);
  const [interactionPass, setInterationPass] = useState(false);
  const { dispatch, state } = useUser();

  const onDismissSnackBar = () => setVisible(false);
  const emptyValue = (valor) => {
    if (valor === "") {
      return true;
    }

    return false;
  };
  const correoInvalido = () => {
    let reg =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!reg.test(token.usrCorreo)) {
      return true;
    }
    return false;
  };

  const submit = () => {
    if (
      !emptyValue(token.usrCorreo) &&
      !correoInvalido() &&
      !emptyValue(token.usrPassword)
    ) {
      axios
        .post("http://localhost:8080/users/login", token)
        .then((response) => {
          storeData("user", response.data.usrCorreo);
          dispatch({
            type: "UPDATE_USER",
            item: {
            ...state,
              user: response.data,
            },
          });
          props.navigation.navigate("Home");
        })
        .catch((err) => {
          setHttpError(err.response.data.mensaje);
          setVisible(true);
        });
    } else {
      setHttpError("Aun faltan cosas que completar.");
      setVisible(true);
    }
  };

  return (
    <>
      <ScrollView
        _contentContainerStyle={{
          px: "20px",
          my: "4",
          minW: "72",
        }}
      >
        <VStack space={2}>
          <Image
            style={styles.imagen}
            source={require("../../resources/motel.jpg")}
          />

          <TextInput
            error={
              (emptyValue(token.usrCorreo) || correoInvalido()) && interaction
            }
            label="username:"
            value={token.usrCorreo}
            onChangeText={(text) => {
              setToken({ ...token, usrCorreo: text });
              setInteration(true);
            }}
          />
          {emptyValue(token.usrCorreo) && interaction ? (
            <HelperText type="error">{constantes.usuarioVacio}</HelperText>
          ) : (
            <></>
          )}

          {correoInvalido() && interaction ? (
            <HelperText type="error">{constantes.correoInvalido}</HelperText>
          ) : (
            <></>
          )}

          <TextInput
            error={emptyValue(token.usrPassword) && interactionPass}
            label="password:"
            secureTextEntry={change}
            value={token.usrPassword}
            right={
              <TextInput.Icon
                name="eye"
                onPress={() => {
                  setChange(!change);
                }}
              />
            }
            onChangeText={(text) => {
              setToken({ ...token, usrPassword: text });
              setInterationPass(true);
            }}
          />
          {emptyValue(token.usrPassword) && interactionPass ? (
            <HelperText type="error">
              {constantes.contraseniaRequerida}
            </HelperText>
          ) : (
            <></>
          )}

          <Button
            style={styles.btn}
            dark={true}
            mode="contained"
            onPress={submit}
          >
            Iniciar Sesión
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              Soy nuevo usuario.{" "}
            </Text>
            <Link
              onPress={() => props.navigation.navigate("Register")}
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
            >
              Quiero mi cuenta
            </Link>
          </HStack>
        </VStack>
      </ScrollView>
      <Snackbar visible={visible} onDismiss={onDismissSnackBar}>
        {httpError}
      </Snackbar>
    </>
  );
};

export default Login;
