import React, { useState } from "react";

import { Text,View,Image,TouchableOpacity } from "react-native";

import ImagePath from "../constants/ImagePath";
import { styles } from "../constants/styles/hotelstyles";

const HotelUpComing = ():JSX.Element=>{
    //to control love icon state active or not
    const [love ,SetLove] = useState(false);

    return(
        <>
        <View style={styles.HotCont}>

            <View style={styles.topH}>
                <Text style={styles.Heading_2}>Upcoming</Text>
                <Image style={styles.H2Img} source={ImagePath.Resturant} />
                <View onTouchStart={()=>{SetLove(!love)}}  style={love ?styles.HeartSpanLove :styles.HeartSpan}>
                <Image style={love ? styles.H2HeartLove :styles.H2Heart} source={ImagePath.Heart}/>
                </View>
                <Text style={styles.Distance} >10 Km</Text>
            </View>

            <View style={styles.container}>

            <View style={styles.headerFlex} >
                <View style={styles.NameandLoc}>
                <Text style={styles.name}>Meraki</Text>
                <Text style={styles.location}>Greek</Text>
                </View>
                <View style={styles.header_right}>
                <Image style={styles.iconLeft} source={ImagePath.Location} />
                <Text style={styles.iconTxt} >Mode Al Faisaliah - Riyadh</Text>
                </View>

            </View>

            <View style={styles.header}>
                <Image style={styles.iconLeftC} source={ImagePath.Phone} />
                <Text style={styles.iconTxt} >+966 11 481 0569</Text>
            </View>

            
            <View style={styles.header}>
                <Image style={styles.iconLeftP} source={ImagePath.SmallProfile} />
                <Text style={styles.iconTxt} >Reservation For 2 People</Text>
            </View>
          
            <View style={styles.headerF}>

                <View style={styles.headerBtn}>
                <Image style={styles.iconLeftBtn} source={ImagePath.Calender} />
                <Text style={styles.iconTxtBtn} >Fri,Agu 20 ,12 Am</Text>
                </View>

                <TouchableOpacity style={styles.btnStyle} ><Text style={styles.btnTxtStyle}>Cancel</Text></TouchableOpacity>

            </View>

            </View>
        </View>
        </>
    )


}


export default HotelUpComing;

