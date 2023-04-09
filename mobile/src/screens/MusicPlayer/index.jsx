import * as React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import styles from './styles';
import Title from '../../components/title/Title';
import Slider from '@react-native-community/slider';
import PrevIcon from '../../../assets/svg/skip-to-previous.svg';
import NextIcon from '../../../assets/svg/skip-to-next.svg';
import PlayActive from '../../../assets/svg/play_active.svg';
import PauseIcon from '../../../assets/svg/pause-icon';
import { Audio } from 'expo-av';
const sampleTrack = {
  uri: 'https://file-examples.com/storage/fe9278ad7f642dbd39ac5c9/2017/11/file_example_MP3_700KB.mp3',
};
const MusicPlayer = () => {
  const [position, setPosition] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [sound, setSound] = React.useState(null);
  const [soundStatus, setSoundStatus] = React.useState({
    status: null,
    icon: 'pause',
  });
  const handleProgress = (status) => {
    setSoundStatus({ status: status });
  };
  async function handleAudio() {
    //playing audio for the first time
    if (soundStatus.status === null) {
      console.log('Loading Sound');
      const { sound, status } = await Audio.Sound.createAsync(
        sampleTrack,
        { shouldPlay: true },
        (status) => handleProgress(status)
      );
      setSound(sound);
      setSoundStatus({ status: status, icon: 'play' });
    }
    //pause audio
    if (soundStatus.status) {
      if (soundStatus.status.isLoaded && soundStatus.status.isPlaying) {
        const status = await sound.pauseAsync();
        console.log('pausing audio');
        setSoundStatus({ status: status, icon: 'pause' });
      }
      //resuming audio
      if (soundStatus.status.isLoaded && !soundStatus.status.isPlaying) {
        const status = await sound.playAsync();
        console.log('resuming audio');
        setSoundStatus({ status: status, icon: 'play' });
      }
    }
  }
  const transform = (ms) => {
    if (!ms) ms = 0;
    min = Math.floor((ms / 1000 / 60) << 0);
    if (min < 10) min = '0' + min;
    sec = Math.floor((ms / 1000) % 60);
    if (sec < 10) sec = '0' + sec;
    return min + ':' + sec;
  };
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
          value={soundStatus.status ? soundStatus.status.positionMillis : 0}
          minimumValue={0}
          maximumValue={
            soundStatus.status ? soundStatus.status.durationMillis : 0
          }
          onValueChange={(value) => {
            sound.setPositionAsync(value);
            setSoundStatus({ icon: 'play' });
          }}
          trackStyle={{ height: 4 }}
          thumbStyle={{ height: 20, width: 20 }}
          thumbTintColor="#6A5ACB"
          minimumTrackTintColor="#6A5ACB"
          maximumTrackTintColor="gray"
        />
      </View>
      <View style={styles.progressLevelDuraiton}>
        <Text style={styles.progressLabelText}>
          {soundStatus.status
            ? transform(soundStatus.status.positionMillis)
            : '00:00'}
        </Text>
        <Text style={styles.progressLabelText}>
          {soundStatus.status
            ? transform(soundStatus.status.durationMillis)
            : '00:00'}
        </Text>
      </View>
      <View style={styles.musicControl}>
        <Pressable>
          <PrevIcon width={60} height={60} />
        </Pressable>
        <Pressable onPress={() => handleAudio()}>
          {soundStatus.icon == 'pause' ? (
            <PlayActive width={80} height={80} />
          ) : (
            <PauseIcon width={80} height={80} />
          )}
        </Pressable>
        <Pressable>
          <NextIcon width={60} height={60} />
        </Pressable>
      </View>
    </View>
  );
};

export default MusicPlayer;
