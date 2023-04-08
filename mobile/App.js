import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import TabNavigator from './src/navigation/navigation'
import LoginScreen from './src/screens/LoginScreen'
import { checkAuth } from './src/firebase/auth'

const LightTheme = {
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
}

export default function App() {
    const [login, setLogin] = React.useState(false)

    useEffect(() => {
        checkAuth(setLogin)
    }, [])

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
