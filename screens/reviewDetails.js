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
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <Text>{navigation.getParam('rating')}</Text>
            {/* <Button title='GO BACK TO HOME SCREEN' onPress={pressHandler}/> */}
        </View>
    )
}
