import React from 'react';
import { Box, AspectRatio, Text, Stack, Heading, VStack, Button } from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import { getRating } from '../../utils/utils'
import { Image } from 'react-native'
import constantes from '../../constantes/constantes';
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
        <Image source={{ uri: `${constantes.baseUrl}/public/moteles/${motel.mo_foto_portada}`  }} style={{width:'100%', height:200}} alt="image base" />
      <Text bold position="absolute" color="coolGray.50" top="0" m="4">
        {
          motel.mo_nombre
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
        onPress={()=>props.navigation.navigate('Habitaciones',{motelId:motel.mo_id})}
      >
        Habitaciones
      </Button>
    </Box>
    <Stack space="2" p="4">
      <Heading size={["md", "lg", "md"]} fontWeight="medium">
        {
          motel.mo_nombre
        }
      </Heading>
      <Text isTruncated noOfLines={["4", "4", "4"]}>
        {motel.mo_direcccion}
      </Text>
    </Stack>
    <VStack space={1} px="4" pb="4">
      <Text color="gray.400">Direccion: {motel.mo_direccion}</Text>

      <AirbnbRating size={20} showRating={false} jumpValue={0.5} isDisabled={true} defaultRating={getRating(motel.valoracion)} />
    </VStack>

  </Box>)
}


export default CardDetalleMotel;