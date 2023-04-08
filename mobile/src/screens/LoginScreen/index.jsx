import * as React from 'react';
import { Image, View, TextInput } from 'react-native';
import Button from '../../components/button/Button';
import styles from './styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    addNewUser(username, password);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/infographic.png')}
        style={styles.info}
        resizeMethod="resize"
      />
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <View>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={() => setUsername(username)}
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
          onChangeText={() => setPassword(password)}
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
        onPress={() => handleSubmit()}
      />
    </View>
  );
};

export default LoginScreen;
