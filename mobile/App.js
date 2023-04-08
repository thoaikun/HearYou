import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Provider } from './src/context/Context'
import { checkAuth } from './src/firebase/auth'
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
    const [login, setLogin] = React.useState(false)

    useEffect(() => {
        checkAuth(setLogin)
    }, [])

    return (
        <Provider>
            {login ? (
                <NavigationContainer theme={LightTheme}>
                    <TabNavigator />
                </NavigationContainer>
            ) : (
                <LoginScreen />
            )}
        </Provider>
    )
}
