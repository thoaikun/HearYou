import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import ListCard from './src/components/listCard/ListCard'
import PodcastCard from './src/components/podcastCard/PodcastCard'
import Tab from './src/components/tab/Tab'
import TabNavigator from './src/navigation/navigation'
import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen/index'
import ProfileScreen from './src/screens/ProfileScreen'
import YourListScreen from './src/screens/YourListScreen'

const LightTheme = {
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
}

export default function App() {
    return (
        <NavigationContainer theme={LightTheme}>
            <TabNavigator />
        </NavigationContainer>
    )
}
