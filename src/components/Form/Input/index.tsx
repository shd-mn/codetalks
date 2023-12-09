import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './input.styles';
type InputTypes = {
  placeholder: string;
  value: string;
  error?: string;
  touched?: boolean;
  isSecure?: boolean;
  onChange: (value: string) => void;
};
function Input({
  placeholder,
  value,
  error,
  touched,
  isSecure = false,
  onChange,
}: InputTypes) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#a2a2a2"
        value={value}
        onChangeText={onChange}
        secureTextEntry={isSecure}
      />
      {touched && error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

export default Input;
