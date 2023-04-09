import React from "react";
import { Dimensions, Pressable } from 'react-native'
import styles from './styles'
import { Text, View } from "react-native";
import Bell from '../../../assets/svg/bell_icon.svg'
import Logout from '../../../assets/svg/logout.svg'
import Back from '../../../assets/svg/back_icon_reverse.svg'
import { Avatar, IconButton } from "@react-native-material/core";
import { logout } from "../../firebase/auth";
import { useNavigation } from "@react-navigation/core";

export default ProfileScreen = () => {
    const maxWidth = Dimensions.get('window').width
    const [pressed, setPressed] = React.useState(false)
    const navigation = useNavigation()

    return (
        <View style={styles.profileContainer}>
            <View style={styles.profileTitle}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Profile</Text>
                <IconButton style={{ position: 'absolute', top: 27, right: 30 }} icon={<Bell height={20} />} />
            </View>
            <View style={{ width: maxWidth, paddingHorizontal: 40, height: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar size={80} image={require('../../../assets/thumbnail.png')} />
                    <Text style={{ marginLeft: 20, fontSize: 20, fontWeight: 'bold' }}>Username</Text>
                </View>
                <IconButton icon={<Logout />} onPress={() => logout()} />
            </View>
            <Pressable
                style={[styles.btn, pressed ? styles.pressed : null]}
                onPress={() => navigation.navigate("Your list")}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
            >
                <Text style={styles.content}>Your list</Text>
                <Back />
            </Pressable>
        </View>
    )
}