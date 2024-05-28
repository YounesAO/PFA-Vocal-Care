import React, { CSSProperties } from 'react';
import { View, Text, TextInput } from 'react-native';

interface myProps {
    label: string;
    style?:CSSProperties;

  }
  
  const InputDate: React.FC<myProps> = (props) => {
  return (
   <View>
    <Text style={{fontSize: 24,fontWeight:"600",color: "#194A3C",marginTop:5,marginBottom:5,}}> {props.label}</Text>
    <TextInput
                  style={{borderWidth:2,borderColor:"#194A3C", borderRadius:5, width:"100%",height:40,fontSize:20,padding:5}}
                  placeholder='DD/MM/YYYY'
                  />
    </View>
  );
}

export default InputDate;
