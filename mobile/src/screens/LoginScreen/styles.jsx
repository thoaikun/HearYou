import { StyleSheet, Dimensions } from 'react-native';
var maxWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    position: 'absolute',
    left: 39,
    top: 80,
  },
  logo: {
    position: 'absolute',
    left: 46,
    top: 550,
  },
  btn: {
    width: maxWidth * 0.8,
    position: 'absolute',
    left: 46,
    top: 680,
    backgroundColor: '#6A5ACB',
    borderRadius: 30,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default styles;
