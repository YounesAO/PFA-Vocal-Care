import { cloneElement, useEffect, useState } from 'react';
import { View, StyleSheet,Pressable, Button, Text, Image } from 'react-native';
import { Audio } from 'expo-av';
import { router } from 'expo-router';
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesome6 } from '@expo/vector-icons';
import { Sound } from 'expo-av/build/Audio';
import PlayBare from './PlayBare';
import StopBare from './StopBare';
import StartBare from './StartBare';
import useSymptomsStore from '@/symptomsStore';
import useRecordStore from '@/recordStore';
import useMetaDataStore from '@/serveyStore';
const config = require('../../../../assets/config.json');
{/**
    ce composant qui utilise pour permettre a l'u'tilisateur d'enregister un record 
    qui sera ensuite valider et envoyer
    @_2ite
    @ENSAJ
  */}
export default function RecordPage() {
  const Symptoms = useSymptomsStore();
  const MetaData = useMetaDataStore();
 
  const {
    uri,
    duration,
    timer,
    record,
    sound,
    recording,
    setUri,
    setDuration,
    setTimer,
    incrementTimer,
    setRecord,
    setSound,
    setRecording,
    unsetRecording,
  } = useRecordStore();
  const [permissionResponse, requestPermission] = Audio.usePermissions();


  useEffect(() => {
    const intervalId = setInterval(() => {
      incrementTimer(); // Increment timer by 1 every 1000ms
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  const pickAudio = async () => {
      try {
          const result = await DocumentPicker.getDocumentAsync({ type: 'audio/*', copyToCacheDirectory: false });
      
          if (!result.canceled) {
              // Handle the selected audio file here
              console.log('Selected audio file:', result.assets[0].size);
              setUri(result.assets[0].uri)
            } else {
              console.log('Document picking cancelled',result);
          }
          } catch (error) {
          console.log('Error picking document:', error);
          }
      };
  async function startRecording() {
    setTimer(0)

    try {
      if ( permissionResponse && permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY);
      setRecording(recording);
      setRecord(true)
      console.log('Recording started');
      
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }
  async function stopRecording() {
    setDuration(timer)
    setTimer(0)
    console.log('Stopping recording..');
    
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri,'here ' );
    if(uri)
    setUri(uri);
    unsetRecording();
    setRecord(false)
    
  }
  

  async function playRecording() {
      try {
        const { sound } = await Audio.Sound.createAsync({ uri });
        await sound.playAsync();
        setSound(sound)
      } catch (error) {
        console.error('Failed to play recording', error);
      }
    };
  
  const stopSound = async () => {
    try {
      console.log('Stopping sound');
      await sound.stopAsync();
      setSound(new Sound())
    } catch (err) {
      console.error('Failed to stop sound', err);
    }
  };
  
  const uploadRecording = async () => {
    if (!uri) return;

    const formData = new FormData();
    formData.append('file', {
      uri: uri,
      name: 'recording.wav',
      type: 'audio/wav',
    } as any);

    try {
      const response = await fetch('http://'+config.serverIP+':'+config.serverPort+'/predict', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const result = await response.json();
      console.log('Upload success', result);
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

const submitData = async () => {
  try {
    const response = await fetch('http://'+config.serverIP+':'+config.serverPort+'/scan', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "metaData": MetaData, "symptoms": Symptoms.selectedSymptoms ,}),
    });

    if (response.ok) {
      // Data sent successfully
      console.log('Data sent successfully');
      router.navigate("/result")
    } else {
      // Handle error
      alert('Failed to send data:');
    }
  } catch (error) {
    // Handle network or other errors
    alert('Error sending data');

  }

}


  return (
    <>
    <View style={styles.container}>
      <View style={{display:"flex", flexDirection:'row',alignItems:"center",justifyContent:"center" ,padding:15,borderWidth:1,width:"100%",borderRadius:10,borderColor:"#154A3D"}}>
      {recording==null ? ((uri=="")?(<StartBare action={startRecording}></StartBare>):(<PlayBare action={playRecording} count={duration} deleteUri={()=>{setUri('')}} stopS={stopSound} soundState={sound}></PlayBare>)):
      (<StopBare action={stopRecording} count={timer}></StopBare>      )}
      </View>
      <View style={{display:'flex',alignItems:'center',width:"100%"}}>
        <Text style={{fontSize:20}}>Or</Text>
      </View>
      <View style={{display:"flex", flexDirection:'row',alignItems:"center",justifyContent:"center" ,marginTop:10,padding:15,borderWidth:1,width:"100%",borderRadius:10,borderColor:"#154A3D"}}>
      <Pressable onPress={pickAudio}>

        <View style={{display:'flex',justifyContent:'center',alignItems:'center',padding:5,backgroundColor:"#194A3C",width:50,height:50,borderRadius:50}}>
          <FontAwesome6 name="file-audio" size={24} color="white"  />  
        </View>
        </Pressable>
        <View style={{marginLeft:10,width:"80%"}}>
          <Text style={{fontSize:24,fontWeight:'bold',color:"#194A3C"}}>Upload existing file</Text>
        </View>
        
      </View>
      <View style={{ display:(uri)?"flex":"none", flexDirection: "row", justifyContent: "flex-end", marginTop: 20, width: "100%" }}>
            <Pressable onPress={submitData}>
              <View style={{ width: 120, padding: 10, backgroundColor: "#2AB802", borderRadius: 5 }}>
                <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Submit {">"}</Text>
              </View>
            </Pressable>
          </View>
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color:"#154A3D",

  },
  subtitle: {
    fontSize:20,
    color: "#38434D",
  },timer: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
  }
});




