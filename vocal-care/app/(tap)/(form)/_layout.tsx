import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Alert, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

export default function Layout() {
    const[str,setStr]=useState("init");
    const router =useRouter();
    const showAlert = () => {
        Alert.alert(
          "Confirm action",
          "Do you really want to cancel.",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK",onPress: () => router.navigate("/test"), }
          ]
        );
      };
  return (
    <Stack>
        <Stack.Screen
        
        name="record/index"
        options={{
            title:'Voice test sample',
            headerTitleAlign: 'center',          
            headerStyle: {
        backgroundColor: '#194A3C',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold',
        },
    }}
      />
      <Stack.Screen
        name="symptoms/index"
        options={{
                title:'Describe your symptoms',
                headerTitleAlign: 'center',          
                headerStyle: {
            backgroundColor: '#194A3C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}
      />
      
      <Stack.Screen
        name="servey/index"
        
        options={{
            title:'Fill the form',
            headerTitleAlign: 'center', // Center align the header title
            headerRight: () => (
                <TouchableOpacity style={{display:'flex',alignItems:'center',justifyContent:'center', flexDirection:'row', borderWidth:3,borderColor:"#dc3545",padding:4,borderRadius:5}}
                onPress={showAlert}
                >
                    <Text style={{color:'#dc3545',fontWeight:'bold',fontSize:14,marginRight:4}} >Cancel</Text>
                    <MaterialIcons name="cancel" size={24} color="#dc3545" />

                </TouchableOpacity>
              ),            presentation: 'modal',
            headerStyle: {
            backgroundColor: '#194A3C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        }}
      />
       
    </Stack>
    
  );
}