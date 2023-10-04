
import {
    StyleSheet,
  } from 'react-native';

export const styles = StyleSheet.create({

    Heading_2:{
        paddingVertical:20,
        paddingHorizontal:20,
        backgroundColor:"#FFF",
        color:'#180732',
        fontWeight:'bold',
    },
    H2Img:{
        width:'95%',
        height:100,
        resizeMode:'stretch',
        marginHorizontal:'2.5%',
        borderRadius:5,
        
        
       
    },
    H2Heart:{
        width:19,
        height:16,
        resizeMode:'contain',
        backgroundColor:'#FFF',
        marginHorizontal:0,
        alignSelf:'center',
        padding:4,
        bottom:7,
        right:0.5,
      
    },
    H2HeartLove:{
        width:19,
        height:16,
        resizeMode:'contain',
        backgroundColor:'#D81F1F',
        marginHorizontal:0,
        alignSelf:'center',
        tintColor:"#FFF",
        
        padding:4,
        bottom:7,
        right:0.5,
      
    },
    HeartSpan:{
        position:'absolute',
        backgroundColor:'#FFF',
        width:20,
        height:20,
        padding:15,
        alignSelf:'flex-end',
        marginTop:8,
        marginRight:4,
        zIndex:10,
        borderRadius:20,
        bottom:75,
        right:20,
        
    },
    //#553586 #180732 #D81F1F

    HeartSpanLove:{
        position:'absolute',
        backgroundColor:'#D81F1F',
        width:20,
        height:20,
        padding:15,
        alignSelf:'flex-end',
        marginTop:8,
        marginRight:4,
        zIndex:10,
        borderRadius:20,
        bottom:75,
        right:20,
        
    },
    Distance:{
        alignSelf:'flex-end',
        paddingHorizontal:6,
        paddingVertical:1,
        fontSize:10,
        color:'#180732',
        fontWeight:'bold',
        backgroundColor:'#FFF',
        bottom:25,
        right:15,
        width:45,
        
        borderRadius:20,
        zIndex:10,
    }
,

HotCont:{
    flex:1,
    flexDirection:'column',
    minHeight:'15%',
    maxHeight:250,
    backgroundColor:"#FFF",
    marginHorizontal:5,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
},

topH:{
    
    flexDirection:'column',
    overflow:'hidden',
    zIndex:1000,
    backgroundColor:'#FFF',
    marginBottom:-12,
  
},


container:{
    
    backgroundColor:'rgb(255,255,255)',
    borderRadius:5,
    paddingHorizontal:10,
    overflow:'hidden',
    maxHeight:'auto',
    minHeight:120,
    
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,
    
},
header:{
    marginStart:5,
    flexBasis:25,
    marginBottom:2,
    flexDirection:'row',
    justifyContent:'flex-start',
  
},
headerFlex:{
    flex:1,
    marginStart:5,
    marginTop:1,
    marginBottom:0,
    flexDirection:'row',
    justifyContent:'center',    
    alignContent:'center',
    alignItems:'center',
    flexBasis:4
   
},
header_right:{  
    flex:4,
    marginLeft:10,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    //left:'35%',
},
NameandLoc:{
    flex:3,
    flexDirection:'row',
},

name:{
    flex:1,
    fontSize:20,
    color:'#553586',
    fontWeight:'bold',
    fontFamily:'arial'
},
location:{
    flex:1,
    fontSize:10,
    color:'#180732',
   // marginLeft:5,
    marginRight:5,
    marginTop:6,
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    //right:35,
    //bottom:3
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

headerF:{
    
    marginStart:5,
    flexBasis:25,
    marginBottom:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    
  
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
    color:'#D81F1F',
    textAlign:'center',
},
btnStyle:{
    flex:1,
    paddingHorizontal:8,
    paddingVertical:5,
    borderRadius:5,
    backgroundColor:'#FFF',
    right:0,
   // start:"800%",
    bottom:18,
    borderColor: '#D81F1F',
    borderWidth:1,
    
},




})