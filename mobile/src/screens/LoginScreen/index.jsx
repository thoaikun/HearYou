import * as React from 'react';
import { Image, View } from 'react-native';
import Button from "../../components/button/Button";
import styles from './styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/infographic.png')}
        style={styles.info}
        resizeMethod="resize"
      />
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Button
        content="Log In"
        style={{ marginTop: 50, paddingVertical: 10 }}
      />
    </View>
  );
};

export default LoginScreen;