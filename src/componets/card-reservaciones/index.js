import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Stack,
} from 'native-base';

import {AirbnbRating } from 'react-native-ratings';
function CardReservaciones(props){
 return(
    <Box
      rounded="lg"
      width="100%"
      shadow={1}
      _light={{ backgroundColor: 'gray.50' }}
      _dark={{ backgroundColor: 'gray.700' }}
    >
      <VStack p="4" space={1} >
        <Stack space={1}>
          <Heading size='sm' ml="-1">
            {
            props.item.resId
            }
          </Heading>
        
        </Stack>
        <Text fontWeight="400" isTruncated noOfLines={["2", "2", "2"]}>
          {
            props.item.haId.haNombreHabitacion
            
          }
        </Text>
        <VStack alignItems="center" position="absolute" bottom="2" >
          <AirbnbRating size={10} showRating={false}  jumpValue={0.5} isDisabled={true} />

        </VStack>
      </VStack>
    </Box>
    );
}

export default CardReservaciones;