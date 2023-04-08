import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ListCard from './src/components/listCard/ListCard'
import PodcastCard from './src/components/podcastCard/PodcastCard'
import TabNavigator from './src/navigation/navigation'
import LoginScreen from './src/screens/LoginScreen/index'

export default function App() {
    return (
        <View
        // style={{
        //     flex: 1,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        // }}
        >
            <LoginScreen />
        </View>
    )
}
