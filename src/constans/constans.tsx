export const ENDPOINTS = {
  // YANDEX: 'https://ya-praktikum.tech/api/v2',
  YANDEX: 'http://localhost:3000/yandex-api',
  // RESOURCES: 'https://ya-praktikum.tech/api/v2/resources',
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

  USERTHEME: {
    PATH: '/user-theme'
  },

  TOPIC: {
    PATH: '/topics'
  },

  TOPICCOMMENT: {
    PATH: '/topic-comments'
  },

  COMMENTTOCOMMENTS: {
    PATH: '/comment-to-comments'
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
  phone = 'phone',
  topic = 'topic',
  comment = 'comment'
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
  topic = 'topic',
  comment = 'comment'
}

export enum InputType {
  text = 'text',
  password = 'password',
  email = 'email',
  phone = 'phone'
}
