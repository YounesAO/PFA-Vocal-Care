import {create} from 'zustand'

interface SymptomsStore {
    selectedSymptoms: string[];
    setSelectedSymptoms: (symptoms: string[]) => void;

  }
  const useSymptomsStore = create<SymptomsStore>((set) => ({
    selectedSymptoms : [],
    setSelectedSymptoms: (symptoms: string[]) => set({ selectedSymptoms: symptoms }),

  }))
  export default useSymptomsStore