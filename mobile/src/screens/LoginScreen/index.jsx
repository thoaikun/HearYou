import { async } from '@firebase/util'
import * as React from 'react'
import { Image, ScrollView, TextInput, View } from 'react-native'
import InoGraphic from '../../../assets/svg/inographic.svg'
import Logo from '../../../assets/svg/logo.svg'
import Button from '../../components/button/Button'
import Context from '../../context/Context'
import { signin } from '../../firebase/auth'
import styles from './styles'

const LoginScreen = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { setName, setRole } = React.useContext(Context)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <InoGraphic />
            <View style={styles.logo}>
                <Logo />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    value={username}
                    onChangeText={(e) => setUsername(e)}
                    style={{
                        height: 50,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        width: 300,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    }}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    secureTextEntry={true}
                    style={{
                        height: 50,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                        width: 300,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                    }}
                />
            </View>
            <Button
                content='Log In'
                style={{ marginTop: 20, paddingVertical: 10 }}
                onPress={async () => {
                    const res = await signin({
                        email: username,
                        password: password,
                    })

                    if (res) {
                        console.log(res)
                        setName(res.name)
                        setRole(res.role)
                    }
                }}
            />
        </ScrollView>
    )
}

export default LoginScreen
