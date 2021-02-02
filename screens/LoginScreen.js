import React, {useState} from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const  LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect (()=>{
        const unsubscribe =  auth.onAuthStateChanged((authUser)=> {
            if(authUser){
                navigation.replace("Home");
            }
        });

        return unsubscribe;
    }, []);
    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style="light" />
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
          <Button onPress={()=> navigation.navigate('Register')} containerStyle={styles.button} type="outline" title="Register"/>
          <View style={{height: 100}} />
        
        </KeyboardAvoidingView>
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
     inputContainer: {
         width: 300, 
     },
     button: {
         width: 200,
         marginTop: 10,

     },
 })