import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import Input from '../../../components/Form/Input';
import Button from '../../../components/UI/Button';
import styles from './login.styles';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import {validationSchema} from './utils/validationSchema';

type PropTypes = {
  navigation: {
    navigate: (routeName: string) => void;
  };
};
interface initialState {
  email: string;
  password: string;
}

const initialForm: initialState = {
  email: '',
  password: '',
};

function Login({navigation}: PropTypes) {
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async (values: initialState) => {
    setIsLoading(true);
    try {
      await auth().signInWithEmailAndPassword(values.email, values.password);
      navigation.navigate('ServerRooms');
      // TODO: error type
    } catch (err: any) {
      if (err.code) {
        showMessage({
          message: authErrorMessageParser(err.code) || 'Something went wrong',
          type: 'danger',
        });
      }
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
        validationSchema={validationSchema}>
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
