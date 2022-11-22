export const LEADER_BOARD = {
  TEAM_NAME: 'dudlers',
  RATING_FIELD_NAME: 'score'
};

export const BASE_URL = 'http://51.250.96.39:3000';

export const ENDPOINTS = {
  YANDEX: `${BASE_URL}/yandex-api`,
  RESOURCES: `${BASE_URL}/yandex-api/resources`,
  LOCALHOST: `${BASE_URL}`,

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
  },

  USERTHEME: {
    PATH: '/user-theme'
  },

  TOPIC: {
    PATH: '/topics'
  },

  LIKES: {
    PATH: '/likes'
  },

  DISLIKES: {
    PATH: '/dislikes'
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
  oldPassword = 'oldPassword',
  newPassword = 'newPassword',
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
  oldPassword = 'old Password',
  newPassword = 'new Password',
  topic = 'topic',
  comment = 'comment'
}

export enum InputType {
  text = 'text',
  password = 'password',
  email = 'email',
  phone = 'phone'
}
