import React from "react";

import {
    Text,
    View,
    Image
  } from 'react-native';
import { styles } from "../constants/styles/styles";
import ImagePath from "../constants/ImagePath";



  


const FavouriteScreen = () : JSX.Element =>{
    return (
        <View style={styles.pageContainer}>
           <Text style={styles.welcomeMessage}>Welcome Favortie </Text>
           <Image style={styles.imgI} source={ImagePath.FavI} />
        </View>
    );

}




export default FavouriteScreen;