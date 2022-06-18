import React, { useState } from 'react';
import { Box, AspectRatio, Text, Stack, Heading, VStack, Button } from 'native-base';
import { Image } from 'react-native';
import ModalConfirmacion from '../../componets/modal-confirmacion';
import constantes from  '../../constantes/constantes';
const CardDetalleHabitacion = (props) => {
    const [showModal, setShowModal] = useState(false)

    const { habitacion } = props.route.params;

    const getBgColor = () => {
        switch (habitacion.estado.est_estado) {
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
                <Image            source={{ uri: `${constantes.baseUrl}/public/habitaciones/${habitacion.fotos[0].fh_foto}`  }}
style={{width:'100%', height:200}} alt="image base" />
            <Text bold position="absolute" color="coolGray.50" top="0" m="4">
                {
                    habitacion.ha_nombre_habitacion
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
                    habitacion.ha_nombre_habitacion
                } {habitacion.ha_numero_habitacion}
            </Heading>
            <Text isTruncated noOfLines={["4", "4", "4"]}>
                {habitacion.ha_descripcion}
            </Text>
        </Stack>
        <VStack space={2} px="4" pb="4" alignItems="center">
            <Text color="gray.400">Precio: ${habitacion.ha_precio.toFixed(2)} Timpo: {habitacion.ha_tiempo}</Text>
            <Button size="lg" bg="violet.500" width="150" style={{ borderRadius: 50, height: 40 }}
                _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
                onPress={() => setShowModal(true)}
            >
                Reservar
            </Button>

        </VStack>
        <ModalConfirmacion showModal={showModal} setShowModal={setShowModal} habitacion={habitacion} navigation={props.navigation} />
    </Box>)
}


export default CardDetalleHabitacion;