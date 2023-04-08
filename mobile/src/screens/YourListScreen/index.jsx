import * as React from 'react';
import { View } from 'react-native';
import Question from "../../components/question/Question";
import styles from './styles';
const YourListScreen = () => {
  return (
    <View style={styles.container}>
      <Question title="Question #1" description="Description" />
    </View>
  );
};

export default YourListScreen;