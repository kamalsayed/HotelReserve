
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
        paddingHorizontal:6,
        paddingVertical:1,
        fontSize:10,
        color:'#180732',
        fontWeight:'bold',
        backgroundColor:'#FFF',
        bottom:25,
        width:45,
        marginLeft:"85%",
        borderRadius:20,
    }
,
header_right:{  
    
    marginLeft:10,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    left:'35%',
},




container:{
    paddingTop:10,
    backgroundColor:'rgb(255,255,255)',
    borderRadius:5,
    paddingHorizontal:10,
    overflow:'hidden',
    maxHeight:'auto',
    minHeight:120,
    marginTop:-20,
    marginBottom:10,
},
header:{
    marginStart:5,
   
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'flex-start',
  
},
headerFlex:{
    flex:1,
    marginStart:5,
    marginTop:1,
    marginBottom:0,
    flexDirection:'row',
    justifyContent:'flex-start',
   
},
name:{
    fontSize:20,
    color:'#553586',
    fontWeight:'bold',
    fontFamily:'arial'
},
location:{
    fontSize:10,
    color:'#180732',
    marginLeft:5,
    marginRight:5,
    marginTop:6,
},
iconLeft:{
    width:10,
    height:10,
    resizeMode:'contain',
    marginRight:4,
    marginTop:1,
},
iconTxt:{
    color:'#180732',
    textTransform:'capitalize',
    fontSize:9,
    fontWeight:'500',
},
btnStyle:{
    paddingHorizontal:8,
    paddingVertical:5,
    borderRadius:5,
    backgroundColor:'#FFF',
    right:0,
    start:"800%",
    bottom:18,
    borderColor: '#D81F1F',
    borderWidth:1,
    
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
    color:'#D81F1F',
}




})