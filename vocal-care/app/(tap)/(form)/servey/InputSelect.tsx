import { View, Text, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

interface myProps {
    label: string;
    data: string[];
    value: string;
    onChange: (text: string) => void;
    style?: StyleProp<ViewStyle>; // Define customStyle prop
    error: boolean; // Add a prop to indicate whether there's an error


  }

  const InputSelect: React.FC<myProps> = (props) => {
  return (
    <View>
      <Text style={{fontSize: 24,fontWeight:"600",color: "#194A3C",marginTop:5,marginBottom:5}}> {props.label}</Text>
      <View style={[{borderWidth:2, borderRadius:5,borderColor:  props.error ? "red":"#194A3C"},props.style]}>
        
      <Picker  style={[{ borderRadius:5, width:"100%",height:60,fontSize:20,padding:2},props.style]}
        selectedValue={props.value}
        onValueChange={props.onChange}
      >
          {props.data.map((item, index) => (
              <Picker.Item style={{fontSize:22}} key={index.toString()} value={item} label={item}/>
          ))}
      </Picker>  
    </View>
</View>
  );
}

export default InputSelect;
