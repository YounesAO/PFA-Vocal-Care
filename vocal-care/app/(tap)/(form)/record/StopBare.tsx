import { FontAwesome6 } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface StopBareProps {
    action: () => Promise<void>;
    
        count:number
    }
    
    const StopBare: React.FC<StopBareProps> = ({ action,count }) => {
    
    return(
        <>
        <View style={{width:"90%"}}>
            <Text style={{fontSize:24,fontWeight:'bold',color:"#194A3C"}}>00:{count}</Text>
        </View>
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',padding:5,backgroundColor:"#800101",width:50,height:50,borderRadius:50}}>
            <FontAwesome6 name="stop" size={24} color="white" onPress={action} />  
        </View>
        </>
    )
}
export default StopBare;