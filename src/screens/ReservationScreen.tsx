import React, { useEffect, useState } from "react";

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    FlatList
  } from 'react-native';

import placeholder from '../api/placeholder';


import  { setGlobalHotels} from '../redux/HotelsSlice';

import Hotel from "../components/Hotel";

import { useAppDispatch , useAppSelector } from "../redux/store";

import HotelUpComing from "../components/HotelUpComing";

import RenderLoader from "../components/RenderLoader";

import { styles } from "../constants/styles/reservationStyle";
import { hotel, hotelstype } from "../constants/types";



const ReservationScreen = () : JSX.Element =>{
    //to control state of Hotels [] localy 
    const [hotels ,SetHotels] =useState(null);

    const globalHotels = useAppSelector((state)=>state.Hotel.hotels);

    const dispatch = useAppDispatch();

    //To control scroll indecator appearence
    
    const [end,setEnd] = useState(false);

    // 
    // data shape to assign hotels store.
    //


    //function handels api request to get json data
    const getPlaceHolder = async ()=>{

         await placeholder.get('/').then((response)=>{

            const data =response.data;

            SetHotels(JSON.parse(JSON.stringify(response.data)));
            
            const Array : hotelstype = data.map((hotel : hotel)=>({id :hotel.id , userId : hotel.userId , title : hotel.title , body : hotel.body , reversed : false}));
    
            dispatch(setGlobalHotels(Array));  

        }).catch((err)=>{console.log(err)});
    }

    //Api Call

    useEffect(()=>{
        getPlaceHolder();
    },[]);


    //Nothing got from API screen
    if(!hotels){
        
        return(
            <View>
                <Text style={{top:40,fontSize:24,color:'rgb(13,13,13)',marginLeft:20}}>Loading . . .</Text>
                <RenderLoader />
            </View>
        )
    }




    return (
        
        <View style={styles.MainCont}>
            <View style={{flex:6}} >
        <ScrollView >
        <View style={{flex:1.5}}>
          <Text style={styles.Heading}>Your Reservation</Text>
        </View>

        <View style={{flex:6,flexDirection:'column',rowGap:100,justifyContent:'space-between'}}>
            
        <View style={{flex:8}}>
        <HotelUpComing />
        </View>

        
        <Text style={styles.Heading_2}>Previous</Text>
        </View>
        </ScrollView>
        </View>
        <View style={styles.FLCont}>  
        <FlatList   
        pagingEnabled={false}
        style={styles.FL}
        data={globalHotels}
        alwaysBounceVertical={true}

        keyExtractor={(item)=> item.id.toString()} 

        renderItem={({ item }) => <Hotel key={item.id} id={item.id} />}

        ListFooterComponent={!end ? <RenderLoader /> : <></>  }
        
        onEndReached={()=>{
            setEnd(true);
           
         }}
         
        onEndReachedThreshold={0}

        ListHeaderComponent={!end ? <RenderLoader /> : <></>}

        onStartReached={()=>{setEnd(true);}}
        onStartReachedThreshold={0}
        onScroll={()=>{setEnd(false);}}
        
         />
    
        </View>     
                
                 
     
        </View>  

    );

}





export default ReservationScreen;

//#553586 #180732 #D81F1F