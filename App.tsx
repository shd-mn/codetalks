/**
 * @format
 */

import React, {useState} from 'react';
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
        .then(res => {
          setResult(JSON.stringify(res));
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

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        setResult(JSON.stringify(res));
      })
      .catch(err => console.log(err));
  };

  const signOut = () => {
    auth()
      .signOut()
      .then(res => setResult(JSON.stringify(res)))
      .catch(err => console.log(err));
  };

  const checkOut = () => {
    const user = auth().currentUser;
    console.log('currentUser', user);
  };

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
      <Button title="sign in" onPress={signIn} />
      <Button title="sign out" onPress={signOut} />
      <Button title="checkOut" onPress={checkOut} />

      <Text>{result}</Text>
    </SafeAreaView>
  );
}

export default App;