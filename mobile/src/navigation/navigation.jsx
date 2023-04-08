import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'
import Navbar from '../components/navbar/Navbar'
import LoginScreen from '../screens/LoginScreen'

const Tab = createBottomTabNavigator()

function TabNavigator() {
    return (
        <Tab.Navigator
            tabBar={(props) => <Navbar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name='Home' component={LoginScreen} />
            <Tab.Screen name='Add' component={LoginScreen} />
            <Tab.Screen name='Setting' component={LoginScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator
