import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen/index';
import Title from './src/components/Title/Title';
import MusicPlayer from './src/screens/MusicPlayer';
export default function App() {
  return (
    <SafeAreaView>
      <MusicPlayer />
    </SafeAreaView>
  );
}
