import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Input from '../../../components/Form/Input';
import Button from '../../../components/UI/Button';
import styles from './login.styles';
function Login() {
  const onPress = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Enter email" />
        <Input placeholder="Enter password" />
      </View>
      <Button title="LOGIN" onPress={onPress} />

      <View>
        <Text style={styles.recover}>Forgot password?</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
