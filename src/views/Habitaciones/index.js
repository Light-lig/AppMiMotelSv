import React,{useEffect, useState} from "react"
import { VStack, Spinner,ScrollView ,Pressable, SimpleGrid } from "native-base"
import { Searchbar } from 'react-native-paper';
import CardHabitacion from '../../componets/card-habitacion';
import useData from '../../customHooks/useData';
const Home = ({navigation, route}) => {
    const { motelId } = route.params;

  const data = useData(`http://localhost:8080/moteles/habitacion/${motelId}`);
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
            w:'100%'
          }} >
      <VStack space={4} alignItems="center">

              <SimpleGrid  space={3} columns={2} spacing={2}>
                {
                  data.length > 0? data.filter(d=>d.haNombreHabitacion.toLowerCase().includes(searchQuery.toLowerCase())).map(d=><Pressable style={{height:'100%'}} key={d.haId} onPress={()=>navigation.navigate("Reservar",{habitacion:d})}><CardHabitacion item={d} key={d.haId} /></Pressable>) :<Spinner accessibilityLabel="Loading posts" />
     
                }
                
              </SimpleGrid>
          
              </VStack>

          </ScrollView>
        </VStack>
    
  )
}

export default Home;