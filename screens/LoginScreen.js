import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input, Image } from 'react-native';

const  LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");\
    const signIn = () => {

    }

    return (
        <View style={styles.container}>
            <Image  
            style ={{width: 200, height: 200}}
            source={{
                uri: '"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"',
                
            }} />
          <View style={styles.inputContainer}>
              <Input placeholder= "Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
              <Input placeholder= "Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
          </View>

          <Button containerStyle={styles.button} onPress={signIn}title="Login"/>
          <Button containerStyle={styles.button} type="outline" title="Register"/>
        </View>
    )
}

export default LoginScreen
 const styles = Stylesheet.create({
     container: {
        flex:1,
        alignItems: "center",
        justifyContent: center,
        padding: 10,
        backgroundColor: "whites"

     },
     inputContainer: {},
     button: {},
 })