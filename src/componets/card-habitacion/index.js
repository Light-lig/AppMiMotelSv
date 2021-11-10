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

function CardHabitacion(props){
  const getBgColor = () =>{
    switch(props.item.esId.estEstado){
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
            source={{
              uri:
              `data:image/jpeg;base64,${props.item.smFotosList[0].fhFoto}`
                ,
            }}
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
            props.item.haNombreHabitacion
            } {props.item.haNumeroHabitacion}
          </Heading>
        
        </Stack>
        <Text fontWeight="400" isTruncated noOfLines={["2", "2", "2"]}>
          {
            props.item.haDescripcion
          }
        </Text>
        <VStack alignItems="center" position="absolute" bottom="2" >
        <Text color="gray.400">Precio: {props.item.haPrecio} Tiempo: {props.item.haTiempo}</Text>

        </VStack>
      </VStack>
    </Box>
    );
}

export default CardHabitacion;