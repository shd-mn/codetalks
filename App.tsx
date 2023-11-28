/**
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

function App(): JSX.Element {
  const [email, setEmail] = useState('jane.doe@example.com');
  const [password, setPassword] = useState('SuperSecretPassword!');
  const [result, setResult] = useState('');

  const signUp = () => {
    if (email && password) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
          console.error(error);
        });
    }
  };

  useEffect(() => {
    setResult(JSON.stringify({email: email, password: password}));
    const user = auth().currentUser;
    console.log('currentUser', user);
  }, [email, password]);

  return (
    <SafeAreaView>
      <Text>React Native Firebase</Text>
      <TextInput
        value={email}
        placeholder="enter email"
        onChangeText={setEmail}
      />
      <TextInput
        value={password}
        placeholder="enter password"
        onChangeText={setPassword}
      />

      <Button title="sign up" onPress={signUp} />
      {/* <Button title="sign in" onPress={signIn} /> */}

      <Text>{result}</Text>
    </SafeAreaView>
  );
}

export default App;
