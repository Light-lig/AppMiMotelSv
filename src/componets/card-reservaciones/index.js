import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Stack,
  SimpleGrid,
} from 'native-base';

function CardReservaciones(props){
 return(
    <Box
      rounded="lg"
      width="100%"
      shadow={1}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'gray.700' }}
    >
      <VStack p="4" space={1}
        style={{border: '2px', borderColor:'white', borderStyle: 'solid', margin: '8px'}}
      >
        <Stack space={2}  >
          <SimpleGrid space={5} columns={2} spacing={5}>
            <Heading size='sm' ml="-1" color='#FFA762'>
              Tiket No: {
              props.item.res_id
              }
            </Heading>

            <Text fontWeight="400" pl={50} isTruncated noOfLines={["2", "2", "2"]}>
              Fecha: {
                props.item.fecha            
              }
            </Text>
          </SimpleGrid>
          
        </Stack>
        <Text fontWeight="400" isTruncated noOfLines={["2", "2", "2"]} 
        style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', fontFamily: 'cursive', color: '#FCFAC3'}}
        >
          {
            props.item.habitacion.ha_nombre_habitacion
          }
        </Text>
        <Text fontWeight="400" isTruncated noOfLines={["2", "2", "2"]} style={{textAlign: 'center'}}>
          {
            props.item.habitacion.ha_id_tipo_de_habitacion
          }
        </Text>
        <SimpleGrid space={1} columns={3} >
          <Text fontWeight="400" isTruncated noOfLines={["2", "2", "2"]}>
            {
              props.item.habitacion.ha_tiempo            
            }
          </Text>
          <Text fontWeight="400" isTruncated noOfLines={["2", "2", "2"]}>
            Por: $ {
              props.item.res_cantidad_apagar            
            }
          </Text>
          <Text fontWeight="400" fontSize='9' pl={90} pt={2} color='#FFA762' isTruncated noOfLines={["2", "2", "2"]}>
            MiMotelSv
          </Text>
        </SimpleGrid>
        
      </VStack>
    </Box>
    );
}

export default CardReservaciones;