import { Dimensions, StyleSheet } from 'react-native'
const maxWidth = Dimensions.get('window').width
var maxHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: maxHeight,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    logo: {
        marginVertical: 30,
    },
})

export default styles
