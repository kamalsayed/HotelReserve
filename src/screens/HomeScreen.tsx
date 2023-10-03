import React from "react";

import {
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

import ImagePath from "../constants/ImagePath";
import { styles } from "../constants/styles";



  


const HomeScreen = () : JSX.Element =>{
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.welcomeMessage}>Welcome Home  </Text>
            <Image style={styles.imgI} source={ImagePath.HomeI} />
        </View>
    );

}



export default HomeScreen;