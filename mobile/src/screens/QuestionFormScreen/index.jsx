import { useNavigation } from '@react-navigation/core'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import BackIcon from '../../../assets/svg/back_icon.svg'
import Button from '../../components/button/Button'
import styles from './styles'
import Input from '../../components/input/Input'

export default function QuestionForm() {
    const navigation = useNavigation()

    return (
        <ScrollView style={styles.container}>
            <View style={styles.appBar}>
                <Pressable
                    style={{ position: 'absolute', bottom: 0, left: -10 }}
                    onPress={() => navigation.navigate('Home')}
                >
                    <BackIcon />
                </Pressable>
                <Text style={styles.screenTitle}>Ask question</Text>
            </View>
            
            <Input 
                placeholder='Podcast name'
            />
            <Input
                placeholder='Ask question'
                multiline={true}
                numberOfLines={10}
            />
            <Button content='Post question' style={styles.button} />
        </ScrollView>
    )
}
