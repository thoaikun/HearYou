import * as React from 'react';
import { Text, View, Image, Dimensions, Pressable } from 'react-native';
import { Stack, Button } from '@react-native-material/core';
import styles from './styles';
const LoginScreen = () => {
  const [pressed, setPressed] = React.useState(false);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/infographic.png')}
        style={styles.info}
        resizeMethod="resize"
      />
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Pressable style={styles.btn}>
        <Text style={styles.title}>Log In</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
