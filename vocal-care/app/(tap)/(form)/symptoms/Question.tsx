import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

interface myProps {
  name: string;
  description: string
  selectedSymptoms: string[];
  handleSymptomSelection: (symptomName: string) => void;
}

const Question: React.FC<myProps> = (props) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'flex-start', alignItems: 'center' }}>
      <Checkbox
        value={props.selectedSymptoms.includes(props.name)}
        onValueChange={() => props.handleSymptomSelection(props.name as string)}
        color={isChecked ? '#154A3D' : undefined}
        style={{ marginRight: 2, width: 20, height: 20 }} >
      </Checkbox>
      <View style={{ display: "flex" }}>
        <Text style={{ fontSize: 16, fontWeight: "600", color: "#000000", marginTop: 15, marginBottom: 0, marginLeft: 3 }}>{props.name}</Text>
        <Text style={{ fontSize: 12, fontWeight: "600", color: "#000000", marginTop: 0, marginBottom: 15, marginLeft: 4 }}>{props.description}</Text>
      </View>
    </View>
  );
}

export default Question;
