import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

export default function Block({ color, name ,goto,text}) {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        let timer:number;
        if (clicked) {
            // Si le composant est cliqué, définir un temporisateur pour réinitialiser l'état après 500 millisecondes
            timer = setTimeout(() => {
                setClicked(false);
            }, 20);
        }

        // Nettoyer le temporisateur lors du démontage du composant ou lors de la mise à jour de clicked
        return () => clearTimeout(timer);
    }, [clicked]);

    const handlePress = () => {
        setClicked(true);
        router.navigate(goto);
    };

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, clicked && styles.clickedContainer]}
            onPress={handlePress}
        >
            <Ionicons name={name} size={36} color={color} />
            
            <Text style={[styles.text, clicked && styles.clickedText]}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        shadowColor: 'green',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 25,
        elevation: 20,
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        width: 170,
        height: 120,
        borderWidth:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    clickedContainer: {
        transform: [{ scale: 1.05 }], // Agrandissement lorsqu'appuyé
    },
    myImage: {
        width: (50),
        height: 50,
        marginBottom: 10,
    },
    clickedImage: {
        width: 120, // Agrandissement de l'image lorsqu'appuyé
        height: 120,
    },
    text: {
        textAlign: 'center',
        fontSize:24,
        fontWeight:'bold',
        
    },
    clickedText: {
        fontSize: 20, // Agrandissement du texte lorsqu'appuyé
    },
});
