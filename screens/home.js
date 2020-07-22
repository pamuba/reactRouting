import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/globals'

export default function Home({ navigation }){


    const pressHandler = () => {
        // navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails')
    }


    return(
        <View style = {globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='GO TO REVIEW DETS' onPress={pressHandler}/>
        </View>
    )
}

