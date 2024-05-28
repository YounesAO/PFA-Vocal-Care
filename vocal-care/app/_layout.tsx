import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Stack>
        <Stack.Screen
        name="index"
        options={{
          // Hide the header for all other routes.
        headerShown: false,
        }}
      />
      <Stack.Screen
        name="termes"
        
        options={{
            title:'Terms and Conditions',
            headerTitleAlign: 'center', // Center align the header title

            presentation: 'modal',
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
        name="(tap)"
        options={{
        headerShown: false,
        }}
      />
      <Stack.Screen
        name="result/index"
        options={{
        headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
        headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
        headerShown: false,
        }}
      />
    </Stack>
    
  );
}