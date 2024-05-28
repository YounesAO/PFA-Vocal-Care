import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Button, Pressable } from 'react-native';
import { Image } from "expo-image";
import { Link, Redirect, router, useLocalSearchParams } from "expo-router";


const ProgressBar = () => {
    const [indexes, setIndexes] = useState([0, 0, 0]);
    const [maxProgress, setMaxProgress] = useState(0);
    const params = useLocalSearchParams<{ q?: string }>();
    useEffect(() => {
        const intervals = indexes.map((_, i) => {
            let toValue = 0;
            if (i === 0) toValue = 40;
            else if (i === 1) toValue = 70;
            else if (i === 2) toValue = 20;

            return setInterval(() => {
                if (indexes[i] < toValue)
                    setIndexes(prevIndexes => {
                        const newIndexes = [...prevIndexes];
                        newIndexes[i] += 1;
                        return newIndexes;
                    });
                else
                    clearInterval(intervals[i]);
            }, 40);
        });

        return () => {
            intervals.forEach(interval => clearInterval(interval));
        };
    }, [indexes]);

    const [progressValues] = useState([
        new Animated.Value(0),
        new Animated.Value(0),
        new Animated.Value(0)
    ]);

    useEffect(() => {
        Animated.timing(progressValues[0], {
            toValue: 200,
            duration: 2000,
            useNativeDriver: false
        }).start();

        Animated.timing(progressValues[1], {
            toValue: 700,
            duration: 2000,
            useNativeDriver: false
        }).start();

        Animated.timing(progressValues[2], {
            toValue: 500,
            duration: 2000,
            useNativeDriver: false
        }).start();
    }, []);

    useEffect(() => {
        const max = Math.max(...indexes);
        setMaxProgress(max);
    }, [indexes]);

    const getColor = (index:number) => {
        if (index <= 20) {
            return ['green', 'lightgreen'];
        } else if (index <= 40) {
            return ['lightgreen', 'yellow'];
        } else if (index <= 60) {
            return ['yellow', 'orange'];
        } else if (index <= 80) {
            return ['orange', 'red'];
        } else {
            return ['red', 'darkred'];
        }
    };
    const Progression = ["Neoplasm", "phonotrouma", "Vocal Play"];
    const renderBars = () => {
        const reversedIndexes = [...indexes].reverse();
        return progressValues.map((progress, index) => (
            <View key={index} style={styles.barContainer}>
                <Animated.View
                    style={[styles.bar, {
                        width: reversedIndexes[index]*5,
                   
                        backgroundColor: progress.interpolate({
                            inputRange: [0, 700],
                            outputRange: getColor(reversedIndexes[index])
                        })
                    }]}
                />
                <Text style={styles.header}>{Progression[index]}</Text>
                <Text style={styles.percentage}>{reversedIndexes[index]}%</Text>
            </View>
        ));
    };

    const handleGoBack = () => {
        // Logique pour revenir en arrière
    };

    return (
        <View style={styles.container}>
            <Text style={styles.result}>Résultat : </Text>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/uploads/image2.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.progressBarContainer}>
            </View>
            <Text style={[styles.maxProgress ,{color:"red"}]}>Neoplasm</Text>
            <Text>Possible that you have this patologie {params.q}</Text>

            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <Link replace href="./pathologie" asChild>
                    <Pressable >
                        <View style={{ width: 260, padding: 15, backgroundColor: "#3d85c6", borderRadius: 7, }}>
                            <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold", textAlign: "center" }}>Learn more</Text>
                        </View>
                    </Pressable>
                </Link>
            </View>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <Link replace href="./test" asChild>
                    <Pressable >
                        <View style={{ width: 260, padding: 15, backgroundColor: "#2AB802", borderRadius: 7, }}>
                            <Text style={{ color: "#FFF", fontSize: 24, fontWeight: "bold", textAlign: "center" }}>Back</Text>
                        </View>
                    </Pressable>
                </Link>
            </View>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imageContainer: {
        alignItems: 'center', // Centrer horizontalement
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    progressBarContainer: {
        width:200,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20, // Ajustement pour l'espace supplémentaire
    },
    barContainer: {
        
        marginBottom: 20,
        alignItems: 'center',
    },
    bar: {
        height: 20,
        borderRadius: 10,
        marginBottom: 5,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    percentage: {
        fontSize: 16,
        color: 'blue',
    },
    result: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
    },
    maxProgress: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
        marginTop: 80,

    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ProgressBar;
