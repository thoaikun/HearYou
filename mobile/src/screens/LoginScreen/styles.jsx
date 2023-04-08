import { Dimensions, StyleSheet } from 'react-native'
const maxWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: '25%',
        marginLeft: '10%',
    },
    logo: {
        marginVertical: 30,
    },
})

export default styles
