import { FontAwesome6 } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Sound } from 'expo-av/build/Audio';

interface PlayBareProps {
  action: () => Promise<void>;
  deleteUri: () => void;
  count:number;
  stopS:()=> Promise<void>;
  soundState:Sound;
}
const PlayBare: React.FC<PlayBareProps> = ({ action,deleteUri,count,stopS,soundState }) => {
    const [play, setPlay] = useState(false);
    const [timer, setTimer] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        if (play && timer > 0) {
          setTimer((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(interval); // Stop the timer when it reaches 0
        }
      }, 1000); // Update every second
  
      // Stop the timer after 10 seconds
      setTimeout(() => {
        clearInterval(interval);
      }, count * 1000);
      if(timer==0){
        setPlay(false)
      }
      return () => clearInterval(interval); // Clean up the interval when the component unmounts
    }, [timer]);
  
  
    const playAudio =()=>{
      setTimer(count)
      setPlay(true)
      
      action()
    }
    const stopAudio =()=>{
      setTimer(0)
      setPlay(false)
      stopS()
    }
  return(
    <>
    <View style={{width:"70%"}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:"#194A3C"}}>Recorded Audio : {play?"playing":""}------- 00:{play?timer:count}</Text>
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',padding:5,backgroundColor:"#194A3C",width:50,height:50,borderRadius:50,marginRight:10}}>
        {!play?(
        <FontAwesome6 name="play" size={24} color="white" onPress={playAudio} />  
      ):(
        <FontAwesome6 name="pause" size={24} color="orange" onPress={stopAudio} />  
  
      )}
      </View>
      <View style={{display:'flex',justifyContent:'center',alignItems:'center',padding:5,backgroundColor:"#800101",borderColor:"#D4D4D4",borderWidth:2,width:50,height:50,borderRadius:50}}>
        <FontAwesome6 name="trash" size={24} color="white" onPress={deleteUri} />  
      </View>
    </>
  )
  }
  export default  PlayBare;