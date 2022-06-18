import React, { useEffect, useState } from 'react'
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  Image,
  VStack,
  Text,
  Spacer,
  Button,
  Center,
  NativeBaseProvider,
} from "native-base"
import { formatWithMask, Masks } from 'react-native-mask-input';
import { useUser } from "../../../store/UserProvider";
const CreditCard = (props) => {
  const { data } = props;
  const creditCard = data.Tarjeta;
  const [visible, setVisible] = useState()
  const { dispatch, state } = useUser();
  const { masked, unmasked, obfuscated } = formatWithMask({
    text: creditCard,
    mask: Masks.CREDIT_CARD,
    obfuscationCharacter: '-',
  });

  useEffect(()=>{
    state.paymethod  ?
    setVisible(true)
    :setVisible(false)
  },[state.paymethod])

  const onSubmitX = () => {
    dispatch({
      type: "UPDATE_USER",
      item: {
        ...state,
        paymethod: {},
      },
    });
  }
  return (
    <>

      <HStack space={3} justifyContent="space-between">
        {
          visible ?
            <Image
              source={{
                uri: "https://w7.pngwing.com/pngs/400/28/png-transparent-credit-card-computer-icons-visa-electron-bank-curio-blue-text-rectangle.png",
              }}
              alt="Alternate Text"
              size="xs"
              resizeMode="cover"
              borderRadius={5}
              width={50}
            />
            : ""
        }
        <VStack>
          <Text
         style={{color:'black'}}
            bold
          >
            {obfuscated}
          </Text>
          <Text
         style={{color:'black'}}
          >
            {props.data.FECHA}
          </Text>
        </VStack>
        <Spacer />
        {
          visible ?
            <Button
              size="sm"
              colorScheme="secondary"
              onPress={onSubmitX}
            >
              X
            </Button>
            : ""
        }
      </HStack>

    </>
  )
}

export default CreditCard