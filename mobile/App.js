import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigator from './src/navigation/navigation'
import LoginScreen from './src/screens/LoginScreen'

const LightTheme = {
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
}

export default function App() {
    const [login, setLogin] = React.useState(true)

    return (
        <>
            {login ? (
                <NavigationContainer theme={LightTheme}>
                    <TabNavigator />
                </NavigationContainer>
            ) : (
                <LoginScreen />
            )}
        </>
    )
}
