import {
    StyleSheet,
  } from 'react-native';
  
export const styles = StyleSheet.create({
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
        backgroundColor:'rgb(252, 252, 252)',
      
       
    },
    Heading_2:{
        flex:1,
       // marginTop:70,
        marginRight:0,
        paddingVertical:20,
        paddingHorizontal:20,
        backgroundColor:"#FFF",
        color:'#180732',
        fontWeight:'bold',
        
       
    },
    FLCont:{
       
        flex:5,
        marginTop:10,
        overflow:"hidden" ,
        borderTopEndRadius:25 ,
        borderTopStartRadius:25, 
        paddingBottom:25,
        },
    FL:{
       
       
    }
    
});
