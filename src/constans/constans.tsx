export const ENDPOINTS = {
  YANDEX: 'https://ya-praktikum.tech/api/v2',

  AUTH: {
    PATH: '/auth',
    USER: '/user',
    SIGNIN: '/signin',
    SIGNUP: '/signup',
    LOGOUT: '/logout'
  },

  USER: {
    PATH: '/user',
    PROFILE: '/profile',
    AVATAR: '/avatar'
  }
};

export enum InputNames {
  login = 'login',
  password = 'password',
  passwordAgain = 'password_again',
  displayName = 'display_name',
  firstName = 'first_name',
  secondName = 'second_name',
  email = 'email',
  phone = 'phone'
}

export enum InputLabel {
  login = 'login',
  password = 'password',
  firstName = 'first name',
  secondName = 'second name',
  email = 'email',
  phone = 'phone number',
  file = 'Файл',
  displayName = 'display name',
  passwordAgain = 'password again'
}

export enum InputType {
  text = 'text',
  password = 'password',
  email = 'email',
  phone = 'phone'
}
