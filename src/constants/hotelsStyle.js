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
    width:8,
    height:8,
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
btnStyle:{
    paddingHorizontal:8,
    paddingVertical:5,
    borderRadius:5,
    backgroundColor:'#553586',
    right:0,
    start:"800%",
    bottom:18,
    
},
   
iconTxtBtn:{
    
    textTransform:'capitalize',
    fontSize:10,
    fontWeight:'500',
    color :'#D81F1F',
},
iconLeftBtn:{
    width:10,
    height:10,
    resizeMode:'contain',
    marginRight:4,
    tintColor:'#D81F1F',
},
headerBtn:{
    marginTop:0,
    marginBottom:0,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
},
btnTxtStyle:{
    fontSize:10,
    color:'rgb(255,255,255)',
}

});