import {
    StyleSheet,
  } from 'react-native';
  
export const styles = StyleSheet.create({container:{
    paddingTop:10,
    backgroundColor:'rgb(255,255,255)',
    borderRadius:5,
    marginHorizontal:15,
    overflow:'hidden',
    maxHeight:'auto',
    minHeight:120,
    marginVertical:1,
    paddingLeft:3,
},
header:{
    marginStart:5,
   
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
},
name:{
    fontSize:17,
    color:'#553586',
    fontWeight:'bold',
    fontFamily:'sans-serif'
},
location:{
    fontSize:10,
    color:'#180732',
    marginLeft:5,
    fontFamily:'sans-serif-medium',
},
iconLeft:{
    width:9,
    height:11,
    resizeMode:'contain',
    marginRight:4,
},iconLeftP:{
    width:13,
    height:13,
    resizeMode:'contain',
    marginRight:4,
},iconLeftC:{
    width:17,
    height:17,
    resizeMode:'contain',
    marginRight:4,
},
iconTxt:{
    color:'#180732',
    textTransform:'capitalize',
    fontSize:9,
    fontWeight:'500',
    textAlign:'left',
    
},

   
iconTxtBtn:{
    
    textTransform:'capitalize',
    fontSize:10,
    fontWeight:'500',
    color :'#D81F1F',
},
iconLeftBtn:{
    width:14,
    height:14,
    resizeMode:'contain',
    marginRight:4,
    tintColor:'#D81F1F',
},
headerBtn:{
    flex:6,
    marginTop:0,
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
},
btnTxtStyle:{
    fontSize:10,
    color:'rgb(255,255,255)',
},

headerF:{
    
    marginStart:5,
    flexBasis:25,
    marginBottom:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    
  
},
btnStyle:{
    minWidth:'5%',
    //
    flex:1,
    paddingHorizontal:5,
    paddingVertical:5,
    borderRadius:5,
    backgroundColor:'#553586',
    right:4,
   // start:"800%",
    bottom:18,
    
    
    
},


});