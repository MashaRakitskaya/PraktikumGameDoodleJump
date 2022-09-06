import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const signInSchema = yup.object().shape({
  login: yup.string().trim().required(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

export const signUpSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required(),
  login: yup.string().trim().required(),
  firstName: yup.string().trim().required(),
  secondName: yup.string().trim().required(),
  phoneNumber: yup
    .string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  passwordAgaing: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});
