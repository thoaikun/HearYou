import { Dimensions, StyleSheet } from 'react-native';
var maxWidth = Dimensions.get('window').width;
var maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  yourlistContainer: {
    // flex: 1,
    height: maxHeight,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  yourlistTitle: {
    height: 100,
    width: maxWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default styles;
