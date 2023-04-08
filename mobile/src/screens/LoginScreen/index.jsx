import * as React from 'react'
import { Image, View } from 'react-native'
import InoGraphic from '../../../assets/svg/inographic.svg'
import Logo from '../../../assets/svg/logo.svg'
import Button from '../../components/button/Button'
import styles from './styles'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <InoGraphic />
            <View style={styles.logo}>
                <Logo />
            </View>
            <Button
                content='Log In'
                style={{ marginTop: 50, paddingVertical: 10 }}
            />
        </View>
    )
}

export default LoginScreen
