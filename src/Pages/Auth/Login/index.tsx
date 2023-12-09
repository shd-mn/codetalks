import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import Input from '../../../components/Form/Input';
import Button from '../../../components/UI/Button';
import styles from './login.styles';

interface initialState {
  email: string;
  password: string;
}

const initialForm: initialState = {
  email: '',
  password: '',
};

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async (values: initialState) => {
    setIsLoading(true);
    try {
      const user = await auth().signInWithEmailAndPassword(
        values.email,
        values.password,
      );
      console.log(user);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>
      <Formik
        initialValues={initialForm}
        onSubmit={handleFormSubmit}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email adress')
            .required('Email is required'),
          password: Yup.string()
            .min(5, 'Password must be at least 5 characters')
            .required('Password is required'),
        })}>
        {({values, errors, touched, handleChange, handleSubmit}) => (
          <>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange('email')}
                error={errors.email}
                touched={touched.email}
              />
              <Input
                placeholder="Enter password"
                value={values.password}
                onChange={handleChange('password')}
                error={errors.password}
                touched={touched.password}
                isSecure={true}
              />
            </View>
            <Button
              title="LOGIN"
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          </>
        )}
      </Formik>
      <View>
        <Text style={styles.recover}>Forgot password?</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;
