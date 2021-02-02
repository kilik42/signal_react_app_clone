import React, {useLayoutEffect,  useState } from 'react';
// import {StyleSheet, View} from "react-native";
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import  {Button, Input} from "react-native-elements";
import { StatusBar } from 'expo-status-bar';
import { auth } from './firebase';

const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    useLayoutEffect(() => {
       navigation.setOptions({
           headerBackTitle: "Back to Login",


       })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoUrl: imageUrl || "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"  ,

                    
               
                })
        }).catch((error) => alert(error.message));
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style ="light" />
            {/* <Text>I AM THE REGISTER SCREEN</Text> */}

            <Text h3 style={{marginBottom: 50}} >
                Create a Signal account
            </Text>

            <View style={styles.inputContainer}>
               <Input placeholder="FullName" 
                autofocus type='text'
                value={name}
                onChangeText={(text) => setName(text)}
               /> 
               <Input placeholder="Email" 
                autofocus type='email'
                value={email}
                onChangeText={(text) => setEmail(text)}
               /> 

                <Input placeholder="Password" 
                autofocus type='password'
                value={password}
                onChangeText={(text) => setPassword(text)}

               /> 

                <Input placeholder="Profile Picture URL (optional)" 
                autofocus type='text'
                value={imageUrl}
                onChangeText={(text) => setImageUrl(text)}
                onSubmitEditing={register}

               /> 
              
            </View>

            <Button 
            containerStyle={styles.button}
            raised
             onPress={register} 
             title="Register"
                />
        <View style={{height: 100}} />


        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
        container : {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
                backgroundColor: "white",

        },

        button: {
            width: 200,
            marginTop: 10,

        },

        inputContainer: {
            width: 300, 
        }

});


