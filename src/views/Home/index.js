import React, { useEffect, useState } from "react"
import { VStack, Spinner, ScrollView, Pressable, SimpleGrid } from "native-base"
import { Searchbar } from 'react-native-paper';
import Card from '../../componets/card';
import useData from '../../customHooks/useData';
import constantes from "../../constantes/constantes";
const Home = ({ navigation }) => {
  const data = useData(`${constantes.baseUrl}/api/moteles/lista`);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (

    <VStack space={1} alignItems="center" mt={2}>
      <Searchbar
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
        <VStack space={4} alignItems="center">

          <SimpleGrid space={3} columns={2} spacing={2}>
            {
              Object.keys(data).length > 0 ? data.moteles.filter(d => d.mo_nombre.toLowerCase().includes(searchQuery.toLowerCase())).map(d => <Pressable style={{ height: '100%' }} key={d.mo_id} onPress={() => navigation.navigate("DetalleMotel", { motel: d })}><Card item={d} key={d.mo_id} /></Pressable>) : <Spinner accessibilityLabel="Loading posts" />

            }

          </SimpleGrid>

        </VStack>

      </ScrollView>
    </VStack>

  )
}

export default Home;