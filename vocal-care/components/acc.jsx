import React, { createContext, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Block from './first1';

// Créer un contexte pour stocker l'état des clics
const ClickStateContext = createContext();

export default function Acc() {
   const [clickedStates, setClickedStates] = useState([false, false, false]);

   return (
      <ClickStateContext.Provider value={{ clickedStates, setClickedStates }}>
         <View style={styles.container}>
               <Block goto={"/test"} color={"#194A3C"} name={"pulse-sharp"}text={"start test"} />
               <Block goto={"/contact"} color={"#194A3C"} name={"at-circle"} text={'contact'}/>
               <Block goto={"/about"} color={"#194A3C"} name={"people-sharp"}text ={'about us'} />
         </View>
      </ClickStateContext.Provider>
   );
}

// Fonction personnalisée pour utiliser le contexte ClickStateContext
export function useClickState() {
   return useContext(ClickStateContext);
}

const styles = StyleSheet.create({
   container: {
      flexWrap:'wrap',
      flexDirection: 'row', // Arrange children in a column
      alignItems: 'center', // Center children horizontally
   },
   firstTwoBlocks: {
      flexDirection: 'row', // Arrange children in a row
      justifyContent: 'space-between', // Space children evenly along the main axis
      alignItems: 'center', // Center children vertically
   },
});
