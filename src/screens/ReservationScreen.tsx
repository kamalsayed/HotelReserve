import React, { useEffect, useState } from "react";
import { RootState } from '../redux/store';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    FlatList
  } from 'react-native';

import placeholder from '../api/placeholder';

import {useSelector , useDispatch} from 'react-redux';
import  { setGlobalHotels} from '../redux/HotelsSlice';
import Hotel from "../components/Hotel";
import { useAppDispatch , useAppSelector } from "../redux/store";
import ImagePath from "../constants/ImagePath";
import HotelUpComing from "../components/HotelUpComing";
import RenderLoader from "../components/RenderLoader";



const ReservationScreen = () : JSX.Element =>{
    const [hotels ,SetHotels] =useState(null);
    const globalHotels = useAppSelector((state)=>state.Hotel.hotels);
    const dispatch = useAppDispatch();
    const [end,setEnd] = useState(false);

    // 
    // data shape to assign hotels store.
    //
    type hotelstype ={id:number ,userId:number , title:string ,body: string , reversed:boolean}[]
    type hotel ={id:number ,userId:number , title:string ,body: string , reversed:boolean}

    //function handels api request to get json data
    const getPlaceHolder = async ()=>{
         await placeholder.get('/').then((response)=>{
            const data =response.data;
            SetHotels(JSON.parse(JSON.stringify(response.data)));
            const Array : hotelstype = data.map((hotel : hotel)=>({id :hotel.id , userId : hotel.userId , title : hotel.title , body : hotel.body , reversed : false}));
            
            dispatch(setGlobalHotels(Array));         
        }).catch((err)=>{console.log(err)});
    }





    useEffect(()=>{
        getPlaceHolder();
    },[]);

   


    //Nothing got from API screen
    if(!hotels){
        
        return(
            <View>
                <Text style={{fontSize:24,color:'rgb(13,13,13)'}}>Loading . . .</Text>
                <RenderLoader />
            </View>
        )
    }




    return (
        
        <View style={styles.MainCont}>

        <View style={{flex:1.5, }}>
          <Text style={styles.Heading}>Your Reservation</Text>
        </View>

        <View style={{flex:6,flexDirection:'column',alignItems:'stretch',alignContent:'center',rowGap:60,flexGrow:6}}>
        <HotelUpComing />
        

        
        <Text style={styles.Heading_2}>Previous</Text>
        </View>

        <View style={styles.FLCont}>  

        <FlatList
        pagingEnabled={false}
        style={styles.FL}
        data={globalHotels}
        alwaysBounceVertical={true}

        keyExtractor={(item)=> item.id.toString()} 
        renderItem={({ item }) => <Hotel key={item.id} id={item.id} />}
        ListFooterComponent={() : JSX.Element=>{
            if(!end){
               return(  <RenderLoader />);
            }   else{
                return(  <></>);
            }                         
            }
            }
        
        onEndReached={() :JSX.Element=>{
            setEnd(true);
            return(<Text style={{marginBottom:30,color:'#aaa',fontSize:30}}>No More !</Text>)
    }}
        onEndReachedThreshold={0}

        ListHeaderComponent={() : JSX.Element=>{
            if(!end){
               return(  <RenderLoader />);
            }   else{
                return(  <></>);
            }                         
            }}

        onStartReached={()=>{setEnd(true);}}
        onStartReachedThreshold={0}
        onScroll={()=>{setEnd(false);}}
        
         />
    
        </View>     
                
                 
     
        </View>  

    );

}

const styles = StyleSheet.create({
    Heading:{
        paddingVertical:25,
        paddingHorizontal:20,
        backgroundColor:"#FFF",
        color:'#180732',
        fontWeight:'bold',
        fontSize:24,
        marginBottom:2,
        
    },
    MainCont:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        alignContent:'center',
        backgroundColor:'rgb(250, 250, 250)',
      
       
    },
    Heading_2:{
        
        marginRight:0,
        paddingVertical:20,
        paddingHorizontal:20,
        backgroundColor:"#FFF",
        color:'#180732',
        fontWeight:'bold',
        
       
    },
    FLCont:{
       
        flex:6,
        marginTop:10,
       
        overflow:"hidden" ,
        borderTopEndRadius:25 ,
        borderTopStartRadius:25 
        },
    FL:{
      
       
    }
    
});





export default ReservationScreen;

//#553586 #180732 #D81F1F