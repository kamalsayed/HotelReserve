import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ReservationScreen from '../screens/ReservationScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Image } from 'react-native';
import ImagePath from '../constants/ImagePath';
import { styles } from '../constants/BottomTabStyle';



const Tab = createBottomTabNavigator();

const BottomTabNav =() : JSX.Element=>  {
  return (
    <Tab.Navigator   safeAreaInsets={{bottom:20,top:1}} initialRouteName="Reservation"    screenOptions={   ({route})=>({
            headerShown :false,
            
            tabBarActiveTintColor:'#D81F1F',
            tabBarInactiveTintColor:'#553586',
            tabBarStyle:{
                backgroundColor:'#FFF',
                height:80,
                borderTopStartRadius:20,
                borderTopEndRadius:20,
                marginTop:0,
                position:'absolute'
            },
            tabBarLabelStyle:{
                fontSize:10.5,
                fontWeight:'bold',
                marginTop:-20,
                marginBottom:8,
            },  
             
            
    })

    }>
      <Tab.Screen name="Home"
      options={{
        
        tabBarIcon:({focused})=>{
            return(
                <Image style={focused?styles.iconsF:styles.icons}  source={ImagePath.HomeI} />
            )

        },
       
      
      }}
      component={HomeScreen}  />

       

      <Tab.Screen name="Reservation"
      options={{
        tabBarIcon:({focused})=>{
            return(
                <Image style={focused?styles.IcoF:styles.IcoN}  source={ImagePath.ReservationI} />
            )
        }
      }} component={ReservationScreen} />


      <Tab.Screen name="Favorite"
     options={{
        tabBarIcon:({focused})=>{
            return(
                <Image style={focused?styles.IcoF:styles.IcoN}  source={ImagePath.FavI} />
            )
        }
      }} component={FavouriteScreen} />


      <Tab.Screen name="Profile"
       options={{
       
        tabBarIcon:({focused})=>{
            return(
                <Image style={  focused?styles.IcoF:styles.IcoN} source={ImagePath.ProfileI} />
            )
        }
      }}
      component={ProfileScreen} />




    </Tab.Navigator>
  );
}





export default BottomTabNav;