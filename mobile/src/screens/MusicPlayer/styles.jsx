import { Dimensions, StyleSheet } from 'react-native';
const maxWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: maxWidth,
    margin: 'auto',
    alignItems: 'center',
  },
  image: {
    marginVertical: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  progressBar: {
    width: 380,
    height: 60,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLevelDuraiton: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: 'black',
  },
  musicControl: {
    marginTop: 10,
    width: maxWidth * 0.7,
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
