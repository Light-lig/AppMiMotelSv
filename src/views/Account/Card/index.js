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
                uri: "https://leadership.ng/wp-content/uploads/2021/07/Visa.jpg",
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
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            bold
          >
            {obfuscated}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
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