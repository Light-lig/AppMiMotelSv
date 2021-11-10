import React from 'react';
import {
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../store/UserProvider';
export default function App(props) {
  const [selected, setSelected] = React.useState(0);
  const {state} = useUser();
  const navigation = useNavigation();

  if(Object.keys(state.user).length == 0){
    return <> </>;
  }

  return (
      <Box  bg="white" safeAreaTop>
        <HStack bg="purple.400" alignItems="center" safeAreaBottom shadow={6}>

          <Pressable
            cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => {setSelected(0),navigation.navigate("Home")}}>
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? 'home' : 'home-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
         
          <Pressable
            cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb={1}
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? 'note' : 'note-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize={12}>
                Mis reservaciones
              </Text>
            </Center>
          </Pressable>
          <Pressable
            cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb={1}
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? 'account' : 'account-outline'}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Mi cuenta
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
  );
}
