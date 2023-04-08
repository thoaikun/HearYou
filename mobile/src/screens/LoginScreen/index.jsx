import * as React from 'react'
import { Image, Text, View } from 'react-native'
import Button from '../../components/button/Button'
import styles from './styles'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={require('../../../assets/infographic.png')} />
            </View>
            <View style={styles.logo}>
                <Image source={require('../../../assets/logo.png')} />
            </View>
            <Button content='Login'></Button>
        </View>
    )
}

export default LoginScreen
