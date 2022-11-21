export const LEADER_BOARD = {
  TEAM_NAME: 'dudlers',
  RATING_FIELD_NAME: 'score'
};

export const ENDPOINTS = {
  YANDEX: 'http://localhost:3000/yandex-api',
  RESOURCES: 'http://localhost:3000/yandex-api/resources',
  LOCALHOST: 'http://localhost:3000',

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
  },

  LEADERBOARD: {
    PATH: '/leaderboard',
    TEAM: '/dudlers',
    ALL: '/all'
  },

  USERTHEME: {
    PATH: '/user-theme'
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
  file = 'file',
  displayName = 'display name',
  passwordAgain = 'password again'
}

export enum InputType {
  text = 'text',
  password = 'password',
  email = 'email',
  phone = 'phone'
}
