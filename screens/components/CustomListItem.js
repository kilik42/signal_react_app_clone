import React from 'react'
import {StyleSheet,  View, Text } from 'react-native'
import {ListItem, Avatar} from "react-native-elements";

const CustomListItem = () => {
    return (
        <View>
            <Text>
            <Avatar
             rounded
             source={{
                 uri: "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
                 
             }}

                />

            </Text>
        </View>
    )
}

export default CustomListItem
