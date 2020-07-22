import React , { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globals'

export default function Home({ navigation }){


    const [reviews, setReviews] = useState([
        {title:'Unreal Tournament', rating:5, body:'lorem ipsum', key:'1'},
        {title:'Quake FPS', rating:4, body:'lorem ipsum', key:'2'},
        {title:'Need For Speed', rating:3, body:'lorem ipsum', key:'3'},
    ])


    // const pressHandler = () => {
    //     // navigation.navigate('ReviewDetails')
    //     navigation.push('ReviewDetails')
    // }


    return(
        <View style = {globalStyles.container}>
        <FlatList 
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
                </TouchableOpacity>
            )}
        />
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            {/* <Button title='GO TO REVIEW DETS' onPress={pressHandler}/> */}
        </View>
    )
}

