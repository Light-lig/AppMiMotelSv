import React from 'react';
import { Modal,Button, useToast  } from 'native-base';
import axios from 'axios';
import {useUser} from '../../store/UserProvider';
const ModalConfirmacion = (props) =>{
    const { state } = useUser();
    const toast = useToast()

    const submit = () =>{
        let token = {
            resId:0,
            resCantidadPagar: props.habitacion.haPrecio,
            fecha: new Date(),
            hora: new Date(),
            haId:props.habitacion.haId,
            usrId:state.user.usrId
        }
        axios.post('http://localhost:8080/moteles/reservar',token).then((response)=>{
                console.log(response);
                props.setShowModal(false);
                toast.show({
                    description: "Se realizo correctamente.",
                  })
        }).catch((err)=>{
            props.setShowModal(false);

            toast.show({
                description: err.response.data.mensaje,
              })

        });
    }
    return(
        <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Confirmacion</Modal.Header>
          <Modal.Body>
            ¿Desea continuar?
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                    props.setShowModal(false)
                }}
              >
                Cancelar
              </Button>
              <Button
                onPress={() => {
                    submit();
                }}
              >
                Aceptar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    );
}

export default ModalConfirmacion;