import React, { useEffect } from "react";

import { Text,View,Image,Button,StyleSheet ,TouchableOpacity } from "react-native";

import ImagePath from "../constants/ImagePath";

import { useAppDispatch , useAppSelector } from "../redux/store";

import  { setGlobalHotels} from '../redux/HotelsSlice';
import { styles } from "../constants/hotelsStyle";

const Hotel = ({id} : {id:number})=>{
    const globalHotels = useAppSelector((state)=>state.Hotel.hotels);
    const dispatch = useAppDispatch();
    const getItemById = (id:number)=>{
         return globalHotels.filter((hotel)=>hotel.id === id)[0];
    }    
    let body =  getItemById(id);
    
    
    

        return(
            <>
            <View style={styles.container}>
                <View style={styles.header}>  
                    <Text style={styles.name}>The Globe</Text>
                    <Text style={styles.location}>International</Text>
                </View>
                <View style={styles.header}>
                    <Image style={styles.iconLeft} source={ImagePath.Location} />
                    <Text style={styles.iconTxt} >{body ? body.title: 'Default'}</Text>
                </View>
                <View style={styles.header}>
                    <Image style={styles.iconLeftP} source={ImagePath.SmallProfile} />
                    <Text style={styles.iconTxt} >{body ? body.body: 'Default'}</Text>
                </View>
                <View style={styles.header}>
                    <Image style={styles.iconLeftC} source={ImagePath.Phone} />
                    <Text style={styles.iconTxt} >+966 11 481 0569</Text>
                </View>

                <View style={styles.headerF}>

                <View style={styles.headerBtn}>
                    <Image style={styles.iconLeftBtn} source={ImagePath.Calender} />
                    <Text style={styles.iconTxtBtn} >Fri,Agu 20 ,12 Am</Text>
                    </View>
                    <TouchableOpacity style={styles.btnStyle} ><Text style={styles.btnTxtStyle}>Re-Reserve</Text></TouchableOpacity>

                </View>
                
            </View>

            </>
        );



}









export default Hotel;

