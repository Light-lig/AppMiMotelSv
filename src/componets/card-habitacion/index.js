import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Stack,
  Button
} from 'native-base';
import constantes from '../../constantes/constantes';
function CardHabitacion(props){
  const getBgColor = () =>{
    switch(props.item.estado.est_estado){
        case 'Disponible':
            return 'success.400'
        case 'Reservado':
            return 'danger.600';
        default:
            return 'yellow.300';
    }
}
 return(
    <Box
      rounded="lg"
      height="100%"
      width="160"
      shadow={1}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'gray.700' }}
    >
      <Box>
          <Image
           resizeMode="cover"
           width="100%"
           height={150}
           style={{
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
           }}
           source={{ uri: `${constantes.baseUrl}/public/habitaciones/${props.item.fotos[0].fh_foto}`  }}

            alt="image"
          />
           <Button
                bg={getBgColor()}
                _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
                position="absolute"
                style={{ borderRadius: 50, height: 30, width: 30 }}
                bottom={-15}
                right="2"
                px="3"
                py="1.5"
            />
      </Box>
      <VStack p="4" space={1} height="140">
        <Stack space={1}>
          <Heading size='sm' ml="-1">
            {
            props.item.ha_nombre_habitacion
            } {props.item.ha_numero_habitacion}
          </Heading>
        
        </Stack>
        <Text fontWeight="400" isTruncated noOfLines={["2", "2", "2"]}>
          {
            props.item.ha_descripcion
          }
        </Text>
        <VStack alignItems="center" position="absolute" bottom="2" >
        <Text color="gray.400">Precio: {props.item.ha_precio} Tiempo: {props.item.ha_tiempo}</Text>

        </VStack>
      </VStack>
    </Box>
    );
}

export default CardHabitacion;