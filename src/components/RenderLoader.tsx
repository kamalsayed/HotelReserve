import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    FlatList,
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