import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Button, Input, Image } from 'react-native';

const  LoginScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Image  
            style ={{width: 200, height: 200}}
            source={{
                uri: '"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png"',
                
            }} />
          <View style={styles.inputContainer}>
              <Input placeholder= "Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
              <Input placeholder= "Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
          </View>

          <Button  title="Login"/>
          <Button  title="Register"/>
        </View>
    )
}

export default LoginScreen
 const styles = Stylesheet.create({
     inputContainer: {},
 })