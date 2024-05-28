import { Image } from "expo-image";
import { Link, Redirect, router } from "expo-router";
import { useState } from "react";
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Page() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // user registring data 
        const userData = {
            username: username,
            email: email,
            password: password,
        };

        // Send user data to API
        fetch('https://192.168.45.1:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('sign up error');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            router.navigate("/home");
        })
        .catch(error => {
            console.error('There was an error!', error);
            alert('Registration failed. Please try again later.');
        });
    };
    
    return(
    <>
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center", 
                    maxWidth:"100%"  , 
                    }}>
                    <Image 
                        source={require('../assets/uploads/logo.png')}
                        style={{width:180,height:180,marginTop:-80,
                        }}/>
                    <Text style={styles.title}>Please login to continue</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={username}
                        onChangeText={setUsername}/>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={email}
                        onChangeText={setEmail}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}/>
                </View>
                
                <View style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:20}}>
            
                    <Pressable onPress={handleSignUp}>
                    <View style={{width:260 ,padding:15,backgroundColor:"#2AB802"}}>
                        <Text style={{color:"#FFF",fontSize:24,fontWeight:"bold",textAlign:"center"}}>Sign up</Text>
                    </View>
                    </Pressable>
                </View>

                <View style={{display:"flex",justifyContent:"center",alignItems:"center", marginTop:20}}>
                <Link replace href="./login" asChild>
                    <Pressable >
                    <View style={{width:260 ,padding:15,backgroundColor:"#ffffff", borderWidth:2,borderColor:"#2AB802"}}>
                        <Text style={{color:"#2AB802",fontSize:24,fontWeight:"bold",textAlign:"center"}}>Go back</Text>
                    </View>
                    </Pressable>
                </Link>
                </View>
            </View>
        </View>
    </>
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
        paddingTop:200,
        width:"80%",

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
  