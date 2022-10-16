export const ENDPOINTS = {
  YANDEX: 'https://ya-praktikum.tech/api/v2',
  RESOURCES: 'https://ya-praktikum.tech/api/v2/resources',

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
    AVATAR: '/avatar',
    PASSWORD: '/password'
  },

  LEADERBOARD: {
    PATH: '/leaderboard',
    TEAM: '/dudlers',
    ALL: '/all'
  }
};

export enum InputNames {
  login = 'login',
  password = 'password',
  oldPassword = 'oldPassword',
  newPassword = 'newPassword',
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
  file = 'file',
  displayName = 'display name',
  passwordAgain = 'password again',
  oldPassword = 'old Password',
  newPassword = 'new Password'
}

export enum InputType {
  text = 'text',
  password = 'password',
  email = 'email',
  phone = 'phone'
}
