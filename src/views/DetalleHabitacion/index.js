import React,{useState} from 'react';
import { Box, AspectRatio, Text,  Stack, Heading, VStack, Button } from 'native-base';
import {Image} from 'react-native';
import ModalConfirmacion from '../../componets/modal-confirmacion';
const CardDetalleHabitacion = (props) => {
    const [showModal, setShowModal] = useState(false)

    const { habitacion } = props.route.params;

    const getBgColor = () =>{
        switch(habitacion.esId.estEstado){
            case 'Disponible':
                return 'success.400'
            case 'Reservado':
                return 'danger.600';
            default:
                return 'yellow.300';
        }
    }
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
                <Image source={{ uri: `data:image/jpeg;base64,${habitacion.smFotosList[0].fhFoto}` }} alt="image base" />
            </AspectRatio>
            <Text bold position="absolute" color="coolGray.50" top="0" m="4">
                {
                    habitacion.haNombreHabitacion
                }
            </Text>
            <Button
                bg={getBgColor()}
                _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
                position="absolute"
                style={{ borderRadius: 50, height: 50, width: 50 }}
                bottom={-25}
                right="3"
                px="3"
                py="1.5"
            />

        </Box>
        <Stack space="2" p="4">
            <Heading size={["md", "lg", "md"]} fontWeight="medium">
                {
                    habitacion.haNombreHabitacion
                } {habitacion.haId}
            </Heading>
            <Text isTruncated noOfLines={["4", "4", "4"]}>
                {habitacion.haDescripcion}
            </Text>
        </Stack>
        <VStack space={2} px="4" pb="4" alignItems="center">
            <Text color="gray.400">Precio: {habitacion.haPrecio} Timpo: {habitacion.haTiempo}</Text>
            <Button size="lg" bg="violet.500" width="150" style={{ borderRadius: 50, height: 40 }}
                _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
                    onPress={()=>setShowModal(true)}
            >
                Reservar
            </Button>

        </VStack>
        <ModalConfirmacion showModal={showModal} setShowModal={setShowModal} habitacion={habitacion} />
    </Box>)
}


export default CardDetalleHabitacion;