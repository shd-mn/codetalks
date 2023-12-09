import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import Input from '../../../components/Form/Input';
import Button from '../../../components/UI/Button';
import styles from './sign.styles';

interface initialState {
  email: string;
  password: string;
  repassword: string;
}

const initialForm: initialState = {
  email: '',
  password: '',
  repassword: '',
};

function Sign() {
  const [isLoading, setIsLoading] = useState(false);

  const handFormSubmit = async (formValues: initialState) => {
    setIsLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <Formik
        initialValues={initialForm}
        onSubmit={handFormSubmit}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email adress')
            .required('Email is required'),
          password: Yup.string()
            .min(5, 'Password must be at least 5 characters')
            .required('Password is required'),
          repassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Password must match')
            .required('Required'),
        })}>
        {({values, errors, touched, handleChange, handleSubmit}) => (
          <>
            <View style={styles.inputContainer}>
              <Input
                placeholder="Enter email"
                onChange={handleChange('email')}
                value={values.email}
                error={errors.email}
                touched={touched.email}
              />

              <Input
                placeholder="Enter password"
                onChange={handleChange('password')}
                value={values.password}
                error={errors.password}
                touched={touched.password}
                isSecure={true}
              />
              <Input
                placeholder="Retry password"
                onChange={handleChange('repassword')}
                value={values.repassword}
                error={errors.repassword}
                touched={touched.repassword}
                isSecure={true}
              />
            </View>
            <Button
              title="Create an account"
              onPress={handleSubmit}
              isLoading={isLoading}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Sign;
