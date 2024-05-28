import Colors from "@/constants/Colors";
import { Link, Redirect, router } from "expo-router";
import Checkbox from 'expo-checkbox';
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import {Image}from "expo-image";
import { useState } from "react";
export default function Page() {
const [isChecked, setChecked] = useState(false);
return (
    <View style={styles.container}>
    
    <View style={styles.main}>
        <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        
        <Text style={styles.title}>Result of the test </Text>
        <Text style={styles.subtitle}>you are likey to have these pathologies :
        </Text>
        </View>
        <Text style={{marginTop:4, fontSize:19,}}>P1 90% </Text>
        <Text style={{marginTop:4, fontSize:19,}}>P2 90% </Text>
        <Text style={{marginTop:4, fontSize:19,}}>P3 90% </Text>
    </View>
        <View style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:20}}>
            <Link replace href="./home" asChild>
                <Pressable >
                <View style={{width:260 ,padding:15,backgroundColor:"#2AB802"}}>
                    <Text style={{color:"#FFF",fontSize:24,fontWeight:"bold",textAlign:"center"}}>Back</Text>
                </View>
                </Pressable>
            </Link>
            </View>


        
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
},
main: {
    flex: 1,
    paddingTop:"60%",
    maxWidth: 960,
    marginHorizontal: "auto",
},
title: {
    fontSize: 40,
    fontWeight: "bold",
    color:"#154A3D",

},
subtitle: {
    fontSize:20,
    color: "#38434D",
},
});
