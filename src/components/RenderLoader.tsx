import React from "react";

import {
    StyleSheet,
    View,
    ActivityIndicator
  } from 'react-native';

const RenderLoader =() : JSX.Element=>{

    return(
        <View style={styles.activityI}>
            <ActivityIndicator size={"large"}  color="#aaa" />
        </View>
    );



}

export default RenderLoader;


const styles =StyleSheet.create({
    activityI:{
        marginBottom:30,
    }
})