import React from "react";
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
const Register = ( props ) => {
  let [service, setService] = React.useState("");
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
          selectedValue={service}
          minWidth="350"
          accessibilityLabel="Choose department"
          placeholder="Choose Department"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </VStack>
      <VStack alignItems="center" space={6}>
        <Select
          selectedValue={service}
          minWidth="350"
          accessibilityLabel="Choose city"
          placeholder="Choose City"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
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
        onPress={()=>props.navigation.navigate('Login')}
      >
        Iniciar Sesion
      </Button>
    </VStack>
  );
};

export default Register;
