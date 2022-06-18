import React, { useEffect, useState } from "react"
import { VStack, Spinner, ScrollView, Pressable, SimpleGrid } from "native-base"
import { Searchbar } from 'react-native-paper';
import Card from '../../componets/card-reservaciones';
import useData from '../../customHooks/useData';
import { useUser } from "../../store/UserProvider";
import constantes from "../../constantes/constantes";
const Home = ({ navigation }) => {

    const {state } = useUser();

  const data = useData(`${constantes.baseUrl}/api/reservaciones/${state.user.usr_id}`);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (

    <VStack space={1}  mt={2}>
      <Searchbar style={{margin: '10px'}}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView
        safeArea
        _contentContainerStyle={{
          p: "20px",
          mb: "4",
          h: "600px",
          w: '100%'
        }} >
        <VStack space={1}>

            {
              Object.keys(data).length > 0 ? data.reservaciones.filter(d => d.habitacion.ha_nombre_habitacion.toLowerCase().includes(searchQuery.toLowerCase())).map(d => <Pressable key={d.res_id} onPress={() => navigation.navigate("DetalleReservaciones", { reservaciones: d })}><Card item={d} key={d.res_id} /></Pressable>) : <Spinner accessibilityLabel="Loading posts" />

            }

        </VStack>

      </ScrollView>
    </VStack>

  )
}

export default Home;