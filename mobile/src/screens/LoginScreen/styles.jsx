import { Dimensions, StyleSheet } from 'react-native'
var maxWidth = Dimensions.get('window').width
var maxHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: maxHeight,
        display: 'flex',
        paddingVertical: 50,
        paddingHorizontal: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    info: {
        flex: 1,
        // aspectRatio: 287 / 441,
        // resizeMode: 'contain',
    },
    logo: {
        marginTop: 20,
    },
})

export default styles;
