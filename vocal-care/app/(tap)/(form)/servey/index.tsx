import Colors from "@/constants/Colors";
import { Link, Redirect, router, useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import Checkbox from 'expo-checkbox';
import { Button, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import InputSelect from "./InputSelect";
import useMetaDataStore from "@/serveyStore";
const config = require('../../../../assets/config.json');

{/**
    Ce composant, implémenté pour inserer les métadonnées  incluent :
    le sexe, l'âge, la profession et la région/pays, 
    qui sont ensuite validées et soumises.
    @_2ite
    @ENSAJ
  */}

export default function Page() {
  const { gender, age, occupation, countryRegion, setGender, setAge, setOccupation, setCountryRegion } = useMetaDataStore();

  const [genderError, setGenderError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [occupationError, setOccupationError] = useState(false);
  const [countryRegionError, setCountryRegionError] = useState(false);


  const validateField = (value: string) => {
    return value !== null && value !== "" && !value.startsWith("select");
  };
  const handleSubmit = async () => {


    const data = {
      gender,
      age,
      occupation,
      countryRegion,
    }


    setGenderError(!validateField(data.gender));
    setAgeError(!validateField(data.age));
    setOccupationError(!validateField(data.occupation));
    setCountryRegionError(!validateField(data.countryRegion));
    if (!(
      data.gender !== null && data.gender !== "" && !data.gender.startsWith("select") &&
      data.age !== null && data.age !== "" && !data.age.toString().startsWith("select") &&
      data.occupation !== null && data.occupation !== "" && !data.occupation.startsWith("select") &&
      data.countryRegion !== null && data.countryRegion !== "" && !data.countryRegion.startsWith("select")
    )) {
      alert('One or more fields are not selected');
    } else {
      router.navigate('/symptoms')
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          <InputSelect
            value={gender}
            onChange={setGender}
            label="Gender"
            data={["Select your gender", "Male", "Female"]}
            error={genderError} />
          <InputSelect
            value={age}
            onChange={setAge}
            label="Age"
            data={["Select your age",
              "Under 20",
              "20-29",
              "30-39",
              "40-49",
              "50-59",
              "60-69",
              "70-79",
              "80-89",
              "90 or older"]}
            error={ageError} />
          <InputSelect
            value={occupation}
            onChange={setOccupation}
            label="Occupation"
            data={["Select your occupation",
              "Entertainment",
              "Education",
              "Customer Service",
              "Public Speaking",
              "Religion",
              "Fitness and Coaching",
              "Media and Broadcasting",
              "Sales and Marketing",
              "Information Technology",
              "Healthcare",
              "Finance",
              "Engineering",
              "Business and Management",
              "Science",
              "Legal",
              "Arts and Design",
              "Hospitality and Tourism",
              "Social Services",
              "Government and Public Administration",
              "Manufacturing and Production",
              "Agriculture and Forestry",
              "Other"]}
            error={occupationError} />
          <InputSelect
            value={countryRegion}
            onChange={setCountryRegion}
            label="Region"
            data={["Select your Region",
              "Tanger-Tétouan-Al Hoceïma",
              "L'Oriental",
              "Fès-Meknès",
              "Rabat-Salé-Kénitra",
              "Béni Mellal-Khénifra",
              "Casablanca-Settat",
              "Marrakech-Safi",
              "Drâa-Tafilalet",
              "Souss-Massa",
              "Guelmim-Oued Noun",
              "Laâyoune-Sakia El Hamra",
              "Dakhla-Oued Ed-Dahab"
            ]}
            error={countryRegionError} />
        </View>

        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
          <Pressable onPress={handleSubmit}>
            <View style={{ width: 260, padding: 15, backgroundColor: "#2AB802", borderRadius: 15 }}>
              <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: "bold", textAlign: "center" }}>Submit</Text>
            </View>
          </Pressable>
        </View>

      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    borderWidth: 1,
  },
  main: {
    flex: 1,
    paddingTop: "60%",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#154A3D",

  },
  subtitle: {
    fontSize: 20,
    color: "#38434D",
  },
});
