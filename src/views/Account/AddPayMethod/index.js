import React from 'react';
import { useUser } from "../../../store/UserProvider";
import { Button } from 'native-base';
import CreditCard from '../Card';
import { useNavigation } from '@react-navigation/native';
const AddPayMethod = (props) =>{
    const { state } = useUser();
        return(state.paymethod !== undefined ?
          Object.keys(state.paymethod).length === 0 ?
        <Button onPress={() => {props.navigation.navigate('PayMethod'),props.setShowModal()}}>Agregar metodo de pago</Button>
        :
        <CreditCard data={state.paymethod}/>
        :   <Button onPress={() => {props.navigation.navigate('PayMethod'),props.setShowModal()}}>Agregar metodo de pago</Button>)
     
}
AddPayMethod.defaultProps={
    setShowModal:()=>{}
}
export default AddPayMethod;