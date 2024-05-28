import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Redirect } from "expo-router";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Page() {
  
    return(
        <> 
          <View                   
          style={{display:'flex', alignItems:'center',justifyContent:"center"}}>
          <Ionicons
                  name="alert-circle" // The name of the Ionicons icon you want to use
                  size={64}
                  color={'#194A3C'}
                  />
        </View>
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Acceptance of Terms</Text>
        <Text style={styles.text}>
          By downloading, installing, or using this application ("the App"), you agree to be bound by these Terms and
          Conditions. If you do not agree with any part of these terms, you must not use the App.
        </Text>
  
        <Text style={styles.sectionTitle}>Personal Use</Text>
        <Text style={styles.text}>
          The App is intended for personal, non-commercial use only. You may not use the App for any illegal or
          unauthorized purpose.
        </Text>
  
        <Text style={styles.sectionTitle}>Data Collection and Usage</Text>
        <Text style={styles.text}>
          You acknowledge and consent to the collection and use of audio recordings and personal information by the App
          for the purpose of training machine learning models and improving decision accuracy. This may include but is not
          limited to voice data, symptoms, and demographic information provided by users.
        </Text>
  
        <Text style={styles.sectionTitle}>Privacy Policy</Text>
        <Text style={styles.text}>
          Your privacy is important to us. Please review our{' '}
          <Text style={styles.link} >
            Privacy Policy
          </Text>
          , which outlines how we collect, use, and disclose your personal information, including audio recordings and
          other data collected through the App.
        </Text>
  
        <Text style={styles.sectionTitle}>Audio Recording</Text>
        <Text style={styles.text}>
          The App may record audio during its use for the purpose of training machine learning models. By using the App,
          you consent to the recording and processing of your voice data for this purpose.
        </Text>
  
        <Text style={styles.sectionTitle}>Data Security</Text>
        <Text style={styles.text}>
          We take reasonable measures to protect the security of your data, including audio recordings and personal
          information. However, we cannot guarantee the security of information transmitted through the App, and you use
          the App at your own risk.
        </Text>
  
        <Text style={styles.sectionTitle}>Accuracy of Information</Text>
        <Text style={styles.text}>
          While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness,
          or reliability of any content within the App. The information provided should not be considered as medical
          advice, and you should always consult a qualified healthcare professional for medical concerns.
        </Text>
  
        <Text style={styles.sectionTitle}>Intellectual Property</Text>
        <Text style={styles.text}>
          All content and materials provided in the App, including but not limited to text, graphics, logos, images, and
          software, are the property of the App owner and are protected by copyright and other intellectual property laws.
        </Text>
  
        <Text style={styles.sectionTitle}>User Conduct</Text>
        <Text style={styles.text}>
          You agree to use the App in accordance with all applicable laws and regulations. You must not engage in any
          conduct that may disrupt or interfere with the functioning of the App or its associated services.
        </Text>
      </ScrollView>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      paddingVertical: 2,
      paddingHorizontal: 16,
    },
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
     
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
    },
    link: {
      color: 'blue',
      textDecorationLine: 'underline',
    },
  });
  