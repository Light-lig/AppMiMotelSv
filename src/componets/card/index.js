import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Stack,
} from 'native-base';
import constantes from "../../constantes/constantes";
 
import {AirbnbRating } from 'react-native-ratings';
import { getRating } from '../../utils/utils'
function CardComponent(props){
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
              `${constantes.baseUrl}/public/moteles/${props.item.mo_foto_portada}`                ,
            }}
            alt="image"
          />
       
      </Box>
      <VStack p="4" space={1} height="140">
        <Stack space={1}>
          <Heading size='sm' ml="-1">
            {
            props.item.mo_nombre
            }
          </Heading>
        
        </Stack>
        <Text fontWeight="400" isTruncated noOfLines={["2", "2", "2"]}>
          {
            props.item.mo_direccion
          }
        </Text>
        <VStack alignItems="center" position="absolute" bottom="2" >
          <AirbnbRating size={10} showRating={false}  jumpValue={0.5} isDisabled={true} defaultRating={getRating(props.item.valoracion)} />

        </VStack>
      </VStack>
    </Box>
    );
}

export default CardComponent;