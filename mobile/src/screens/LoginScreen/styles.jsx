import { Dimensions, StyleSheet } from 'react-native'
const maxWidth = Dimensions.get('window').width
const maxHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: maxWidth * 0.25,
    },
    image: {
        marginLeft: maxHeight * 0.03,
    },
    logo: {
        marginLeft: maxHeight * 0.03,
        marginVertical: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles
