import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/globals'

export default function ReviewDetails({ navigation }){
    
    // const pressHandler = () =>{
    //     // navigation.goBack();
    //     navigation.pop();
    // }



    return(
        <View style = {globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            {/* <Button title='GO BACK TO HOME SCREEN' onPress={pressHandler}/> */}
        </View>
    )
}
