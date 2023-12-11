import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import Input from '../../../components/Form/Input';
import Button from '../../../components/UI/Button';
import styles from './sign.styles';
import {showMessage} from 'react-native-flash-message';
import {signValidationSchema} from './utils/validationSchema';

type PropTypes = {
  navigation: {
    navigate: (routeName: string) => void;
  };
};
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

function Sign({navigation}: {navigation: PropTypes}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (formValues: initialState) => {
    setIsLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.email,
        formValues.password,
      );
      showMessage({
        message: 'User created',
        type: 'success',
      });
      navigation.navigate('Login');
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
        <Text style={styles.title}>Sign In</Text>
      </View>
      <Formik
        initialValues={initialForm}
        onSubmit={handleFormSubmit}
        validationSchema={signValidationSchema}>
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
