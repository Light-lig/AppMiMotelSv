import React from 'react';
import { Box, AspectRatio, Text, Stack, Heading, VStack, Button } from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import { getRating } from '../../utils/utils'
import { Image } from 'react-native'
const CardDetalleMotel = (props) => {
  const { motel } = props.route.params;
  return (<Box
    shadow="2"
    w={{ base: "64", md: "80", lg: "md" }}
    _light={{ bg: "coolGray.50" }}
    _dark={{ bg: "gray.700" }}
    width="100%"
    height="100%"
  >
    <Box>
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image source={{ uri: `data:image/jpeg;base64,${motel.moFotoPortada}` }} alt="image base" />
      </AspectRatio>
      <Text bold position="absolute" color="coolGray.50" top="0" m="4">
        {
          motel.moNombre
        }
      </Text>
      <Button
        bg="violet.500"
        _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
        position="absolute"
        style={{ borderRadius: 50, height: 40 }}
        bottom={-20}
        right="3"
        px="3"
        py="1.5"
        onPress={()=>props.navigation.navigate('Habitaciones',{motelId:motel.moId})}
      >
        Habitaciones
      </Button>
    </Box>
    <Stack space="2" p="4">
      <Heading size={["md", "lg", "md"]} fontWeight="medium">
        {
          motel.moNombre
        }
      </Heading>
      <Text isTruncated noOfLines={["4", "4", "4"]}>
        {motel.moDireccion}
      </Text>
    </Stack>
    <VStack space={1} px="4" pb="4">
      <Text color="gray.400">Hora apertura: {motel.moHoraApertura} Hora cierre: {motel.moHoraCierre}</Text>

      <AirbnbRating size={20} showRating={false} jumpValue={0.5} isDisabled={true} defaultRating={getRating(motel.smValoracionList)} />

    </VStack>

  </Box>)
}


export default CardDetalleMotel;