import * as React from 'react';
import { TextInput, Image, View } from 'react-native';
import InoGraphic from '../../../assets/svg/inographic.svg';
import Logo from '../../../assets/svg/logo.svg';
import Button from '../../components/button/Button';
import styles from './styles';
import { signin } from '../../firebase/auth';

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <InoGraphic height={200} />
      <View style={styles.logo}>
        <Logo />
      </View>
      <View>
        <TextInput
          placeholder="Email"
          value={username}
          onChangeText={(e) => setUsername(e)}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 300,
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={true}
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 300,
          }}
        />
      </View>
      <Button
        content="Log In"
        style={{ marginTop: 50, paddingVertical: 10 }}
        onPress={() => signin({email: username, password: password})}
      />
    </View>
  );
};

export default LoginScreen;
