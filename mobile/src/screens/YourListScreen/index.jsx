import * as React from 'react';
import { View, Text } from 'react-native';
import Question from "../../components/question/Question";
import styles from './styles';
import Back from '../../../assets/svg/back_icon.svg'
import { Dimensions } from 'react-native';
import { IconButton } from '@react-native-material/core';

const YourListScreen = () => {
  const maxWidth = Dimensions.get('window').width;

  return (
    <View style={styles.yourlistContainer}>
      <View style={styles.yourlistTitle}>
        <IconButton style={{ position: 'absolute', top: 27, left: 30 }} icon={<Back height={30} />} />
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Your list</Text>
      </View>
      <View style={{ width: maxWidth, paddingHorizontal: 20 }}>
        <Question title="Question #1" description="Description" />
        <Question title="Question #2" description="Description" />
      </View>
    </View>
  );
};

export default YourListScreen;