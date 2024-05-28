import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
    
      <Drawer.Screen
          name="home" // This is the name of the page and must match the url from root
          options={{
            drawerIcon:({size,color})=>(
              <Ionicons name="home" size={size} color={color} />
            ),
            drawerLabel: 'Home',
            title: 'Welcome to Vocal Care',
            headerTintColor:"#154A3D",
            drawerActiveTintColor:'#154A3D',

            headerTitleAlign: 'center', // Center align the header title
            
            headerTitleStyle: {
              fontWeight: 'bold',
              },
          }}
        />
        <Drawer.Screen
          name="test"
          options={{
            drawerIcon:({size,color})=>(
              <Ionicons name="person" size={size} color={color} />
            ),
            drawerLabel: 'Test your vocals',
            drawerActiveTintColor:'#154A3D',
            title: 'Start the scan',
            headerTintColor:"#154A3D",
            headerTitleAlign: 'center', // Center align the header title
            
            headerTitleStyle: {
              fontWeight: 'bold',
              },
          }}
        />
        <Drawer.Screen
          name="pathologie" // This is the name of the page and must match the url from root
          options={{
            drawerIcon:({size,color})=>(
              <Ionicons name="compass" size={size} color={color} />
            ),
            drawerLabel: 'Pathologies',
            drawerActiveTintColor:'#154A3D',
            title: 'Discover pathologies',
            headerTintColor:"#154A3D",
            headerTitleAlign: 'center', // Center align the header title
            
            headerTitleStyle: {
              fontWeight: 'bold',
              },
          }}
        />
        
        
        <Drawer.Screen
          name="(form)" // This is the name of the page and must match the url from root
          options={{
            drawerStyle:{display:'none'},
            drawerLabelStyle:{display:'none'},
            headerShown:false
          }}
        />
        



      </Drawer>
      
    </GestureHandlerRootView>
  );
}