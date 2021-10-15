import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import styles from './style';
const Login = () => {
    const [text, setText] = React.useState('');
    return (
        <ScrollView style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 2 }}>
                <Image style={styles.imagen} source={require('../../resources/motel.jpg')} />
            </View>
            <View style={{ flex: 1 }}>
                <TextInput

                    label="Username:"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    style={{ marginTop: 20 }}

                    label="Password:"
                    secureTextEntry
                    value={text}
                    right={<TextInput.Icon name="eye" />}
                    onChangeText={text => setText(text)}
                />

            </View>
            <View style={styles.continerButtons}>
                <Button style={styles.child}
                    dark={true} 
                    mode="contained" onPress={() => console.log('Pressed')}>
                    Iniciar Session
                </Button>
                <Text style={styles.quieroCuenta}>Quiero mi cuenta</Text>
                <Button style={styles.child}
                dark={true} 
                    mode="contained" onPress={() => console.log('Pressed')}>
                    Registrarme
                </Button>
            </View>
        </ScrollView>
    )
}

export default Login;