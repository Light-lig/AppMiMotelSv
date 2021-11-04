import React, { useEffect, useState } from "react";
import {
  ScrollView,
  VStack,
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
import styles from "./style";
import { TextInput, Button, HelperText, Snackbar } from "react-native-paper";
import constantes from "../../constantes/constantes";
import axios from "axios";

const Register = (props) => {
  const [departamentos, setDepartamentos] = useState([]);
  const [dep, setDep] = useState(0);
  const [mun, setMun] = useState(0);
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/moteles/departamentos").then((resp) => {
      console.log(resp);
      setDepartamentos(resp.data);
    });
  }, []);

  return (
    <VStack space={4} alignItems="center" mt={3}>
      <Text fontSize="5xl">Registrarme</Text>
      <FormControl>
        <Stack mx="4">
          <FormControl.Label>Username</FormControl.Label>
          <Input />
        </Stack>
      </FormControl>
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </Stack>
      </FormControl>
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>confirm password</FormControl.Label>
          <Input type="password" />
        </Stack>
      </FormControl>
      <VStack alignItems="center" space={6}>
        <Select
          selectedValue={dep?dep:0}
          minWidth="350"
          accessibilityLabel="Choose department"
          placeholder="Choose Department"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => {
            setDep(parseInt(itemValue));
            axios
              .get(`http://localhost:8080/municipios/lista/${itemValue}`)
              .then((res) => {
                setMunicipios(res.data);
              });
            console.log(departamentos.find((item)=>item.depId === parseInt(itemValue)))

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
          selectedValue={mun?mun: 0 }
          minWidth="350"
          accessibilityLabel="Choose city"
          placeholder="Choose City"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => {setMun(parseInt(itemValue))}}
        >
          {municipios.map((m) => (
            <Select.Item key={m.munId} label={m.munNombre} value={m.munId} />
          ))}
        </Select>
      </VStack>

      <Button
        style={styles.btn}
        dark={true}
        mode="contained"
        //onPress={submit}
      >
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
