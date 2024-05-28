import {create} from 'zustand'
import { AVPlaybackStatus, Audio } from 'expo-av';

interface RecordStore {
    uri: string;
    duration: number;
    timer: number;
    record: boolean;
    sound: Audio.Sound ;
    recording: Audio.Recording ;
    setUri: (uri: string) => void;
    setDuration: (duration: number) => void;
    setTimer: (timer: number) => void;
    incrementTimer: () => void;
    setRecord: (record: boolean) => void;
    setSound: (sound: Audio.Sound ) => void;
    setRecording: (recording: Audio.Recording ) => void;
    unsetRecording: () => void;

  }
  const useRecordStore = create<RecordStore>((set) => ({
    uri: '',
    duration: 0,
    timer: 0,
    record: false,
    sound: null!,
    recording: null!,
    setUri: (uri: string) => set({ uri }),
    setDuration: (duration: number) => set({ duration }),
    setTimer: (timer: number) => set({ timer }),
    incrementTimer: () => set((state) => ({ timer: state.timer + 1 })),
    setRecord: (record: boolean) => set({ record }),
    setSound: (sound: Audio.Sound ) => set({ sound }),
    setRecording: (recording: Audio.Recording ) => set({ recording }),
    unsetRecording: () => set({ recording: null! }),

  }));
  
  export default useRecordStore;