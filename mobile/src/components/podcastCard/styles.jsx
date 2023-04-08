import { Dimensions, StyleSheet } from 'react-native'
const maxWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 18,
        color: '#8F8B8B',
    },
})

export default styles
