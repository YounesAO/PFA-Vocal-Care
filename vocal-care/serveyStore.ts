import {create} from 'zustand'

interface MetaData {
    gender: string;
    age: string;
    occupation: string;
    countryRegion: string;
    setGender: (gender: string) => void;
    setAge: (age: string) => void;
    setOccupation: (occupation: string) => void;
    setCountryRegion: (countryRegion: string) => void;
  }
  const useMetaDataStore = create<MetaData>((set)=>({
    gender: '',
    age: '',
    occupation: '',
    countryRegion: '',
    setGender: (gender: string) => set({ gender }),
    setAge: (age: string) => set({ age }),
    setOccupation: (occupation: string) => set({ occupation }),
    setCountryRegion: (countryRegion: string) => set({ countryRegion }),
  })) 
  export default useMetaDataStore