import React from "react";

import {
    Image,
    Text,
    View,
  } from 'react-native';
import { styles } from "../constants/styles/styles";
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