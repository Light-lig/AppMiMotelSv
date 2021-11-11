import React, { useEffect, useState } from "react"
import { VStack, Spinner, ScrollView, Pressable, SimpleGrid } from "native-base"
import { Searchbar } from 'react-native-paper';
import Card from '../../componets/card-reservaciones';
import useData from '../../customHooks/useData';
import { useUser } from "../../store/UserProvider";
import constantes from "../../constantes/constantes";
const Home = ({ navigation }) => {

    const {state } = useUser();

  const data = useData(`${constantes.baseUrl}/moteles/reservaciones/${state.user.usrId}`);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (

    <VStack space={1}  mt={2}>
      <Searchbar style={{margin: '5px'}}
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
              data.length > 0 ? data.filter(d => d.haId.haNombreHabitacion.toLowerCase().includes(searchQuery.toLowerCase())).map(d => <Pressable key={d.resId} onPress={() => navigation.navigate("DetalleReservaciones", { motel: d })}><Card item={d} key={d.resId} /></Pressable>) : <Spinner accessibilityLabel="Loading posts" />

            }

        </VStack>

      </ScrollView>
    </VStack>

  )
}

export default Home;