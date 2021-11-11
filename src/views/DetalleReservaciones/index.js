import React, { useState } from 'react';
import { Box, Text, Stack, Heading, SimpleGrid } from 'native-base';

const CardDetalleReservacion = (props) => {
    
    const  {reservaciones}  = props.route.params;
    return (<Box
        shadow="2"
        w={{ base: "64", md: "80", lg: "md" }}
        _light={{ bg: "coolGray.50" }}
        _dark={{ bg: "gray.700" }}
        width="100%"
        height="100%" >

        <Stack space="2" p="4">
            <Text fontWeight="400" textAlign={'right'} noOfLines={["2", "2", "2"]}>
            Fecha: {
                reservaciones.fecha
            }
            </Text>
            
            <Heading size={["md", "lg", "md"]} fontWeight="medium" color='#FFA762'>
                Tiket No. {
                    reservaciones.resId
                } 
            </Heading>

            <Text fontWeight="400" noOfLines={["2", "2", "2"]} 
                style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', fontFamily: 'cursive', color: '#FCFAC3'}}
            >
                {
                    reservaciones.haId.haNombreHabitacion
                }
            </Text>
            <Text fontWeight="400" noOfLines={["2", "2", "2"]} style={{textAlign: 'center', color: '#FCFAC3'}}>
                Tipo habitacion: {
                    reservaciones.haId.haTipoDeHabitacion            
                }
            </Text>
            <SimpleGrid space={1} columns={2} spacing={1}>
                <Text fontWeight="400" fontWeight='bold' noOfLines={["2", "2", "2"]} >
                    No. habitacion:
                </Text>
                <Text fontWeight="400" noOfLines={["2", "2", "2"]}>
                    {
                        reservaciones.haId.haNumeroHabitacion            
                    }
                </Text>
            </SimpleGrid>

            <SimpleGrid space={1} columns={2} spacing={1}>
                <Text fontWeight="400" fontWeight='bold' noOfLines={["2", "2", "2"]} >
                    Duracion:
                </Text>
                <Text fontWeight="400" noOfLines={["2", "2", "2"]}>
                    {
                        reservaciones.haId.haTiempo
                    }
                </Text>
            </SimpleGrid>

            <SimpleGrid space={1} columns={2} spacing={1}>
                <Text fontWeight="400" fontWeight='bold' noOfLines={["2", "2", "2"]} >
                    Por: $
                </Text>
                <Text fontWeight="400" noOfLines={["2", "2", "2"]}>
                    {
                        reservaciones.resCantidadApagar
                    }
                </Text>
            </SimpleGrid>
            
            <SimpleGrid space={1} columns={2} spacing={1} pt={2}>
                <Text fontWeight="400" fontWeight='bold' noOfLines={["2", "2", "2"]} >
                    Municipio:
                </Text>
                <Text fontWeight="400" noOfLines={["2", "2", "2"]}>
                    {
                        reservaciones.usrId.munId.munNombre
                    }
                </Text>
            </SimpleGrid>
            <Text fontWeight="400" pt={5} fontWeight='bold' noOfLines={["2", "2", "2"]} >
                Descripción:
            </Text>
            <Text fontWeight="400" noOfLines={["2", "2", "2"]}>
                {
                    reservaciones.haId.haDescripcion
                }
            </Text>
        </Stack>
        
    </Box>)
}


export default CardDetalleReservacion;