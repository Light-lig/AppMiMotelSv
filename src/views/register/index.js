import React, { useEffect, useState } from "react";
import {
  ScrollView,
  VStack,
  useToast,
  Heading,
  FormControl,
  Input,
  WarningOutlineIcon,
  HStack,
  Stack,
  Image,
  Text,
  Box,
  Link,
  Select,
  CheckIcon,
} from "native-base";

import { TextInput } from "react-native";
import styles from "./style";
import { Button, HelperText, Snackbar } from "react-native-paper";
import constantes from "../../constantes/constantes";
import axios from "axios";

const Register = (props) => {
  const toast = useToast();
  const [departamentos, setDepartamentos] = useState([]);
  const [dep, setDep] = useState(0);
  const [mun, setMun] = useState(0);
  const [sendData, setSendData] = useState({});
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/moteles/departamentos").then((resp) => {
      console.log(resp);
      setDepartamentos(resp.data);
    });
  }, []);

  const handleChange = (name, value) => {
    setSendData({ ...sendData, [name]: value });
  };

  const submit = () => {
    console.log("bienvenidos", sendData);
    let json = {
      correo: sendData.username,
      password: sendData.newPassword,
      idMunicipio: sendData.municipio,
      tipoUser: 2,
    };

    axios.post("http://localhost:8080/users/newUser", json).then((resp) => {
      toast.show({
        description: "Datos Creados correctamente",
      });
      console.log(resp), props.navigation.navigate("Login");
    });
  };

  return (
    <VStack space={4} alignItems="center" mt={3}>
      <Text fontSize="5xl">Registrarme</Text>
      <FormControl>
        <Stack mx="4">
          <FormControl.Label>Username</FormControl.Label>
          <TextInput
            name="username"
            onChangeText={(text) => handleChange("username", text)}
          />
        </Stack>
      </FormControl>
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>
          <TextInput
            secureTextEntry={true}
            onChangeText={(text) => handleChange("password", text)}
          />
        </Stack>
      </FormControl>
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>confirm password</FormControl.Label>
          <TextInput
            secureTextEntry={true}
            onChangeText={(text) => handleChange("newPassword", text)}
          />
        </Stack>
      </FormControl>
      <VStack alignItems="center" space={6}>
        <Select
          selectedValue={dep ? dep : 0}
          minWidth="350"
          accessibilityLabel="Choose department"
          placeholder="Choose Department"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => {
            handleChange("departamento", itemValue);
            setDep(parseInt(itemValue));
            axios
              .get(`http://localhost:8080/municipios/lista/${itemValue}`)
              .then((res) => {
                setMunicipios(res.data);
              });
            console.log(
              departamentos.find((item) => item.depId === parseInt(itemValue))
            );
          }}
        >
          {departamentos.map((dep) => (
            <Select.Item
              key={dep.depId}
              label={dep.depNombre}
              value={dep.depId}
            />
          ))}
        </Select>
      </VStack>
      <VStack alignItems="center" space={6}>
        <Select
          selectedValue={mun ? mun : 0}
          minWidth="350"
          name="mun"
          accessibilityLabel="Choose city"
          placeholder="Choose City"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => {
            handleChange("municipio", itemValue);
            setMun(parseInt(itemValue));
          }}
        >
          {municipios.map((m) => (
            <Select.Item key={m.munId} label={m.munNombre} value={m.munId} />
          ))}
        </Select>
      </VStack>

      <Button style={styles.btn} dark={true} mode="contained" onPress={submit}>
        Crear Cuenta
      </Button>
      <Text fontSize="md">Ya tengo mi cuenta!</Text>
      <Button
        style={styles.btn}
        dark={true}
        mode="contained"
        onPress={() => props.navigation.navigate("Login")}
      >
        Iniciar Sesion
      </Button>
    </VStack>
  );
};

export default Register;
