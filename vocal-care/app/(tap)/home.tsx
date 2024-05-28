import { Image } from "expo-image";
import { Link, Redirect, router } from "expo-router";
import { useState } from "react";
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Acc from "../../components/acc";

export default function Page() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };
    const goTest =()=>{
        setClicked(!clicked);
        setTimeout(()=>{
            router.navigate("/test")

        },200)
    };

    return(
    <>
        <View style={styles.container}>
            {/** 
             * <View style={{  backgroundColor:"#d2D2D2",
                            width:"100%", 
                            padding:10,
                            position:"relative",
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"flex-start",
                            alignItems:"center"
                            
                            }}>
                    <Image 
                            source={require('../../assets/images/user.png')}
                            style={{width:50,height:50,
                            }}
                        />
                    <View>
                        <Text style={styles.title}>Welcome Adam,</Text>
                        <Text>Show history</Text>
                    </View>
                </View>
             */}
            <View style={styles.main}>
                {/*<View style={{ }}>
                <Pressable onPressIn={goTest}>
                    <View  style={{  width:200,
                                        height:100, 
                                        backgroundColor: clicked ? '#2AB802' : '#dddddd',
                                        borderRadius:10 ,
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        margin:10
                                    }}>
                                <Text style={{
                                                fontSize:20,
                                                fontWeight:"bold",
                                                color:clicked ? '#ffffff' : '#194A3C',
                                            }}>Start a scan</Text>
                    </View>
                    </Pressable>
                </View>
                */}
                <Acc></Acc>
            </View>
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 0,
      backgroundColor: "#194A3C"
    },
    main: {
        flex: 1,
        paddingTop:0,
        width:"100%",
        borderWidth:1,
      marginHorizontal: "auto",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color:"#154A3D",
  
    },
    subtitle: {
      fontSize:20,
      color: "#38434D",
    },
    input: {
        width: '90%',
        height:50,
        backgroundColor: '#003030',
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#2AB802',
        marginVertical: 6,}
  });
  