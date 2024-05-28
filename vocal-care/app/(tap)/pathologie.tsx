import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
const config = require('../../assets/config.json');

interface Pathology {
    name: string;
    description: string;
  }

  const ListItem: React.FC<Pathology> = ({ name, description }) => (

    <View style={{ padding: 1 }}>
      <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    </View>
  );
  
  const Page = () => {
    const [pathologies, setPathologies] = useState<Pathology[]>([]); // Initialize symptoms state

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://'+config.serverIP+':'+config.serverPort+'/pathologies');
            const jsonData = await response.json();
            setPathologies(jsonData.pathologie); // Update symptoms state with fetched data
    
            console.log(pathologies)
    
          } catch (error) {
            // Handle any errors
            alert('Error fetching data:');
          }
        };
        
        // Call the fetchData function when the component is mounted
        fetchData();
        return () => {
          // Cleanup code
        };
      }, [router]);


    return (
      <FlatList
        data={pathologies}
        renderItem={({ item }) => <ListItem name={item.name} description={item.description} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };
  const styles = StyleSheet.create({
  item: {
    backgroundColor: '#154A3D55',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:5,
  },
  title: {
    fontSize: 24,
  },
  description: {
    fontSize: 16,
  },
});

  export default Page;