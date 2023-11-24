// Imports
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Text, TextInput, View } from 'react-native';

// Styles
import globalStyles from '../../../assets/styles/global.css';

// Components
import MintyLogo from '../../components/MintyLogo';
import CustomButton from '../../components/CustomButton';

export default function Login({ navigation, onLayoutRootView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    if (!username || !password) {
      Alert.alert('Please enter both username and password');
      return;
    }

    navigation.navigate('Dashboard');

    setUsername('');
    setPassword('');
  };

  return (
    <View style={globalStyles.container} onLayout={onLayoutRootView}>
      <MintyLogo />

      <View style={{ width: '70%' }}>
        <TextInput
          style={globalStyles.input}
          placeholder="Username"
          onChangeText={handleUsernameChange}
          value={username}
          placeholderTextColor="#fff"
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry
          placeholderTextColor="#fff"
        />

        <CustomButton onPress={handleSubmit} buttonText={'Login'} />

        <Text style={[globalStyles.body, { textAlign: 'center' }]}>
          Forgot Password
        </Text>
      </View>

      <View>
        <Text style={[globalStyles.body, { textAlign: 'center' }]}>
          Don’t have account? Sign up now.
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
