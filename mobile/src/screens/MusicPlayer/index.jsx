import * as React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import styles from './styles';
import Title from '../../components/title/Title';
import Slider from '@react-native-community/slider';
import PrevIcon from '../../../assets/svg/skip-to-previous.svg';
import NextIcon from '../../../assets/svg/skip-to-next.svg';
import PlayActive from '../../../assets/svg/play_active.svg';
import PlayInActive from '../../../assets/svg/play_inactive.svg';
import { Audio } from 'expo-av';
const MusicPlayer = () => {
  const [obj, setObject] = React.useState({ sound: undefined, active: false });
  async function playSound() {
    console.log('Loading Sound');
    const source = {
      uri: 'https://file-examples.com/storage/fe9278ad7f642dbd39ac5c9/2017/11/file_example_MP3_700KB.mp3',
    };
    const { sound } = await Audio.Sound.createAsync(source);
    if (!obj.active) {
      setObject({ sound: sound, active: true });
    } else {
      setObject({ sound: undefined, active: false });
    }
    console.log('Playing Sound');
    await sound.playAsync();
  }
  React.useEffect(() => {
    return obj.sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [obj.sound]);
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
        <Pressable onPress={() => playSound()}>
          {!obj.active ? (
            <PlayActive width={80} height={80} />
          ) : (
            <PlayInActive width={80} height={80} />
          )}
        </Pressable>
        <Pressable>
          <NextIcon width={60} height={60} />
        </Pressable>
      </View>
    </View>
  );
};

export default MusicPlayer
