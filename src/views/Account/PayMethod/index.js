import React, { useState, useEffect } from "react";
import { ScrollView, VStack, HStack, Button, Center, Heading, FormControl, Box } from "native-base";
import { TextInput, View } from 'react-native';
import { useForm, useController } from "react-hook-form";
import MaskInput, { Masks    } from 'react-native-mask-input';
import styles from "./style";
import { useUser } from "../../../store/UserProvider";
const PayMethod = (props) => {
  const { dispatch, state } = useUser();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

    dispatch({
      type: "UPDATE_USER",
      item: {
      ...state,
        paymethod: data,
      },
    });
    props.navigation.navigate("Account")
  }
  const [creditCard, setCreditCard] = useState('');

  const Input = ({ name, control }) => {
    const { field } = useController({
      control,
      defaultValue: '',
      name,
    })
    return (
      <MaskInput value={field.value} onChangeText={field.onChange} style={styles.input} mask={Masks.CREDIT_CARD}/>
    )
  }

  const InputField = ({ name, control }) => {
    const zipCodeMask = [/\d/, /\d/, '/', /\d/, /\d/, /\d/,/\d/];
    const { field } = useController({
      control,
      defaultValue: '',
      name,
    })
    return (
      <MaskInput value={field.value} onChangeText={field.onChange} style={styles.input} mask={zipCodeMask } />
    )
  }

  const InputFieldCVC = ({ name, control }) => {
    const zipCodeMask = [/\d/, /\d/,/\d/];
    const { field } = useController({
      control,
      defaultValue: '',
      name,
    })
    return (
      <MaskInput value={field.value} onChangeText={field.onChange} style={styles.input} mask={zipCodeMask } />
    )
  }

  return (
    <>
      <ScrollView
        _contentContainerStyle={{
          px: "20px",
          my: "4",
          minW: "72",
        }}
      >
        <VStack space={4} my={1}>
          <Center flex={1} px="3">
            <Heading size="2xl" style={{color:'black'}}>Metodo de Pago</Heading>
          </Center>
        </VStack>
        <VStack space={4} my={2}>
          <Box>
            <FormControl mb="5">
              <FormControl.Label style={{color:'black'}}>No. Tarjeta: </FormControl.Label>

              <Input name="Tarjeta" control={control} />
              
            </FormControl>
          </Box>
        </VStack>
        <VStack space={4} my={2}>
          <Box>
            <FormControl mb="5">
              <FormControl.Label style={{color:'black'}}>Fecha de Expiracion:</FormControl.Label>
              <InputField name="FECHA" control={control} />
            </FormControl>
          </Box>
        </VStack>
        <VStack space={4} my={2}>
          <Box>
            <FormControl mb="4">
              <FormControl.Label style={{color:'black'}}>CVC:</FormControl.Label>
              <InputFieldCVC name='CCV' control={control} />
            </FormControl>
          </Box>
        </VStack>

        <HStack space={3} alignItems="center">
          <Box>
            <Button
              size="sm"
              colorScheme="secondary"
              onPress={() => props.navigation.navigate("Account")}
            >
              Cancelar
            </Button>
          </Box>
          <Box>
            <Button
              size="sm"
              colorScheme="primary"
              onPress={handleSubmit(onSubmit)}
            >
              Guardar
            </Button>
          </Box>
        </HStack>

      </ScrollView>
    </>

  )
}
export default PayMethod