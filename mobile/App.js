import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LoginScreen from './src/screens/LoginScreen/index'
import { HomeScreen } from './src/screens/HomeScreen'
export default function App() {
    return (
        <SafeAreaView>
            {/* <LoginScreen /> */}
            <HomeScreen />
        </SafeAreaView>
    )
}
