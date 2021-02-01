import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import  {Button, Input} from "react-native-elements";
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState("");

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
               /> 

            </View>

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
        container : {

        }


})
