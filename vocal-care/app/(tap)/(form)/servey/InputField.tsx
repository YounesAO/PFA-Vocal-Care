import React, { CSSProperties } from 'react';
import { View, Text, TextInput } from 'react-native';

interface myProps {
    label: string;
    placeholder: string;
    style?:CSSProperties;
    value: string;
    onChangeText: (text: string) => void;
  }
  
  const InputField: React.FC<myProps> = (props) => {
  return (
   <View>
    <Text style={{fontSize: 24,fontWeight:"600",color: "#194A3C",marginTop:5,marginBottom:5,}}> {props.label}</Text>
    <TextInput    
                  style={{borderWidth:2,borderColor:"#194A3C", borderRadius:5, width:"100%",height:40,fontSize:20,padding:5}}
                  placeholder={props.placeholder}
                  placeholderTextColor="#ADADAD"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={props.value}
                  onChangeText={props.onChangeText}
                  
                  />
    </View>
  );
}

export default InputField;
