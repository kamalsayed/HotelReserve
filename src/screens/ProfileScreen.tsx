import React from "react";

import {
    Image,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { styles } from "../constants/styles";
import ImagePath from "../constants/ImagePath";



  


const ProfileScreen = () : JSX.Element =>{
    return (
        <View style={styles.pageContainer}>
            <Text style={styles.welcomeMessage}>Welcome Profile </Text>
            <Image style={styles.imgI} source={ImagePath.ProfileI} />
        </View>
    );

}


export default ProfileScreen;