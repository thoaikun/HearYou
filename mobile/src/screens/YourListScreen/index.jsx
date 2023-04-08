import * as React from 'react';
import { View, Text } from 'react-native';
import Question from "../../components/question/Question";
import styles from './styles';
import Back from '../../../assets/svg/back_icon.svg'
import { Dimensions } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Context from '../../context/Context';
import { getQuestionByUserID } from '../../firebase/firestore';
import { useNavigation } from '@react-navigation/core';

const YourListScreen = () => {
  const maxWidth = Dimensions.get('window').width;
  const nagivation = useNavigation()
  const { uid, role } = React.useContext(Context)
  const [questions, setQuestions] = React.useState([])

  React.useEffect(() => {
    const handle = async () => {
      const res = await getQuestionByUserID(uid)
      setQuestions(res)
    }

    handle()
  }, [])

  return (
    <View style={styles.yourlistContainer}>
      <View style={styles.yourlistTitle}>
        <IconButton onPress={() => nagivation.goBack()} style={{ position: 'absolute', top: 27, left: 30 }} icon={<Back height={30} />} />
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Your list</Text>
      </View>
      <View style={{ width: maxWidth, paddingHorizontal: 20 }}>
        {questions.map((item, index) =>
          <Question key={item.questionID} title={`Question #${index + 1}`} description={item.description} />
        )}
      </View>
    </View>
  );
};

export default YourListScreen;