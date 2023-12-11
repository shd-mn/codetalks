import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email adress')
    .required('Email is required'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
});
