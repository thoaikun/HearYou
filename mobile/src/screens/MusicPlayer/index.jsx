import * as React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import styles from './styles';
import Title from '../../components/Title/Title';
import Slider from '@react-native-community/slider';
import PrevIcon from '../../../assets/svg/skip-to-previous.svg';
import NextIcon from '../../../assets/svg/skip-to-next.svg';
import PlayActive from '../../../assets/svg/play_active.svg';
import PlayInActive from '../../../assets/svg/play_inactive.svg';

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <Title title="Playing" />
      <View style={styles.image}>
        <Image source={require('../../../assets/thumbnail.png')} />
      </View>
      <Text style={styles.title}>The Title</Text>
      <View>
        <Slider
          style={styles.progressBar}
          value={20}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#6A5ACB"
          minimumTrackTintColor="#6A5ACB"
          maximumTrackTintColor="gray"
          trackHeight={20}
        />
      </View>
      <View style={styles.progressLevelDuraiton}>
        <Text style={styles.progressLabelText}>00:00</Text>
        <Text style={styles.progressLabelText}>02:00</Text>
      </View>
      <View style={styles.musicControl}>
        <Pressable>
          <PrevIcon width={60} height={60} />
        </Pressable>
        <Pressable>
          <PlayActive width={80} height={80} />
        </Pressable>
        <Pressable>
          <NextIcon width={60} height={60} />
        </Pressable>
      </View>
    </View>
  );
};

export default MusicPlayer;
