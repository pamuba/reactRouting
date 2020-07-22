import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/globals";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  // const pressHandler = () =>{
  //     // navigation.goBack();
  //     navigation.pop();
  // }

  const rating = navigation.getParam('rating');
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>

        <View stye={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>

        {/* <Text>{navigation.getParam('rating')}</Text> */}
      </Card>
      {/* <Button title='GO BACK TO HOME SCREEN' onPress={pressHandler}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
    //   container: {
    //     padding: 24,
    //   },
});
    