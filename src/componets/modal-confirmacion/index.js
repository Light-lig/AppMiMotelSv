import React,{useState} from 'react';
import { Modal, Button, useToast, FormControl, Input } from 'native-base';
import axios from 'axios';
import { useUser } from '../../store/UserProvider';
import AddPayMethod from '../../views/Account/AddPayMethod';
import constantes from '../../constantes/constantes';
const ModalConfirmacion = (props) => {
  const { state } = useUser();
  const [ccv, setCcv] = useState('');
  const handleChange = (event) => setCcv(event.target.value);

  const toast = useToast()
  const submit = () => {
    let token = {
      res_id: 0,
      res_cantidad_apagar: props.habitacion.ha_precio,
      fecha: new Date(),
      hora: new Date(),
      ha_id: props.habitacion.ha_id,
      usr_id: state.user.usr_id
    }
    if (state.paymethod === undefined) {
      toast.show({
        description: 'Debe especificar un metodo de pago',
      })
      return;
    }
    if( Object.keys(state.paymethod).length === 0){
      toast.show({
        description: 'Debe especificar un metodo de pago',
      })
      return;
    }
    if(state.paymethod.CCV != ccv){
      toast.show({
        description: 'El ccv es invalido.',
      })
      return;
    }
    if (props.habitacion.estado.est_estado === 'Reservado' || props.habitacion.estado.est_estado === 'Limpieza') {
      toast.show({
        description: 'Esta habitacion no se encuentra disponible',
      })
      return;
    }
    axios.post(`${constantes.baseUrl}/api/reservar`, token).then((response) => {
      props.habitacion.estado.est_estado = 'Reservado';
      props.setShowModal(false);
      toast.show({
        description: response.data.mensaje,
      })
    }).catch((err) => {
      props.setShowModal(false);

      toast.show({
        description: err.response.data.mensaje,
      })

    });


  }
  return (
    <Modal isOpen={props.showModal} onClose={() => props.setShowModal(false)} size="lg">
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Confirmacion</Modal.Header>
        <Modal.Body>
          <AddPayMethod navigation={props.navigation} setShowModal={() => props.setShowModal(false)} />
          {
            (state.paymethod !== undefined) ?
            ( Object.keys(state.paymethod).length > 0)?

              <FormControl>
                <FormControl.Label>CCV</FormControl.Label>
                <Input       onChange={handleChange}  />
              </FormControl> : <></>:<></>

          }
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