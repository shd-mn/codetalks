import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './sign.styles';
import Input from '../../../components/Form/Input';
import Button from '../../../components/UI/Button';
function Sign() {
  const onPress = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Enter email" />
        <Input placeholder="Enter password" />
        <Input placeholder="Retry password" />
      </View>
      <Button title="Create an account" onPress={onPress} />
    </SafeAreaView>
  );
}

export default Sign;
