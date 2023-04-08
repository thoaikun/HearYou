import { Dimensions, StyleSheet } from 'react-native';
var maxWidth = Dimensions.get('window').width;
var maxHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    height: maxHeight,
    width: maxWidth,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
});

export default styles;
