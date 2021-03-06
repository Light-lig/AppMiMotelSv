import React from "react";
import { useUser } from '../../store/UserProvider';
import { ScrollView, VStack, HStack, Center, Heading, Image, Input, Text,Button, Link } from "native-base";
import AddPayMethod from "./AddPayMethod";

const Account = (props) => {
  const { state, dispatch } = useUser();


  return (
    <>
      <ScrollView
        _contentContainerStyle={{
          px: "20px",
          my: "4",
          minW: "72",
        }}
      >
        <VStack space={4} my={5}>
          <Center flex={1} px="3">
            <Image
              style={{ borderRadius: 50 }}
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size="2xl"
            />
          </Center>

        </VStack>
        <VStack space={4}>
          <Heading style={{color:'black'}}>Correo:</Heading>
          <Input size="lg" value={state.user.usr_correo} isDisabled={true} />
        </VStack>
        <VStack  space={4} my={5}>
          <Heading style={{color:'black'}}>Mis Metodos de Pago</Heading>
          <AddPayMethod navigation={props.navigation}/>
        </VStack>
      </ScrollView>
    </>
  )
}

export default Account