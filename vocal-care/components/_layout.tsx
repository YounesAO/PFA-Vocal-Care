import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function AppLayout() {
  return (
    <GestureHandlerRootView >
            <Drawer />
    </GestureHandlerRootView>
  );
}
