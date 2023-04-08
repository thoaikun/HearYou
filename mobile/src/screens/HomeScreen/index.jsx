import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import BellIcon from '../../../assets/svg/bell_icon.svg'
import PodcastCard from '../../components/podcastCard/PodcastCard'
import TopTab from '../../components/tab/Tab'
import styles from './styles'

const Tab = createMaterialTopTabNavigator()

const Trending = () => {
    return (
        <ScrollView>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
            <PodcastCard></PodcastCard>
        </ScrollView>
    )
}

const Newest = () => {
    return (
        <View>
            <Text>Newest</Text>
        </View>
    )
}

const Filter = () => {
    return (
        <View>
            <Text>Filter</Text>
        </View>
    )
}

const HomeScreen = () => {
    return (
        <>
            <View style={styles.appBar}>
                <BellIcon
                    style={{ position: 'absolute', bottom: 5, right: 25 }}
                />
                <Text style={styles.screenTitle}>Home</Text>
            </View>
            <View style={{ height: 100 }}></View>

            <Tab.Navigator tabBar={(props) => <TopTab {...props} />}>
                <Tab.Screen name='Trending' component={Trending} />
                <Tab.Screen name='Newest' component={Newest} />
                <Tab.Screen name='Filter' component={Filter} />
            </Tab.Navigator>
        </>
    )
}

export default HomeScreen
