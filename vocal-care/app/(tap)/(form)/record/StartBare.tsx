import { FontAwesome6 } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface StartBareProps {
    action: () => Promise<void>;
  }
  
  const StartBare: React.FC<StartBareProps> = ({ action }) => {
  
  return(
    <>
    <View style={{width:"90%"}}>
        <Text style={{fontSize:24,fontWeight:'bold',color:"#194A3C"}}>Press to record</Text>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',padding:5,backgroundColor:"#194A3C",width:50,height:50,borderRadius:50}}>
        <FontAwesome6 name="microphone" size={24} color="white" onPress={action} />  
      </View>
    </>
  )
  }
  export default StartBare