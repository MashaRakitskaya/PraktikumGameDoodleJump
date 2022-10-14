export const SIGNIN_PATH = '/signin';
export const SIGNUP_PATH = '/signup';
export const PROFILE_PATH = '/profile';
export const PROFILE_SETTING_PATH = '/profile-setting';
export const PASSWORD_SETTING_PATH = '/password-setting';
export const FORUM_PATH = '/forum';
export const FORUM_CHAT_ID_PATH = '/forum/:forumChatId';
export const LEADERBOARD_PATH = '/leaderboard';
export const PRESENTATION_PATH = '/presentation';
export const GAME_PATH = '/game';
export const ERROR404_PATH = '/404';
export const ERROR500_PATH = '/500';
export const ROOT_DIV = '#root';
interface LeaderboardListProps {
  id: string;
  name: string;
  score: number;
  urlImg: string;
}

interface ForumTopicsListProps {
  id: string;
  title: string;
  lastMessage: string;
  numberMessages: number;
  time: string;
  urlImg: string;
}

export const leaderboardList: LeaderboardListProps[] = [
  {
    id: '1',
    name: 'Elena List',
    score: 1246434,
    urlImg:
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80'
  }
];

export const forumTopicsList: ForumTopicsListProps[] = [
  {
    id: '23515667',
    title: 'Elena List',
    lastMessage:
      'Sed ut perspics wtrwer fwrtrgtwrtw rtwrwriat iSedSed ut perspicswtrwerfwrtrgtwrtwrtwrwriatis unde omnis isteSed ut perspicswtrwerfwrtrgtwrtwrtwrwriatis unde omnis iste ut perspicswtrwerfwrtrgtwrtwrtwrwriatis unde omnis istes unde omnis iste',
    numberMessages: 10009,
    time: '12:00',
    urlImg:
      'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    id: '23535667',
    title: 'Elena List',
    lastMessage: 'Sed ut perspiciatis unde omnis iste twrwriat iSedSed .',
    numberMessages: 10009,
    time: '12:00',
    urlImg:
      'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  },
  {
    id: '23556667',
    title: 'Elena List',
    lastMessage: 'Sed ut perspiciatis unde omnis iste. twrwriat iSedSed ..',
    numberMessages: 10009,
    time: '12:00',
    urlImg:
      'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
  }
];

export const messagesList = [
  { user_id: '214', id: '2514', messageText: 'fsdfsgsff' },
  { user_id: '234', id: '2174', messageText: 'fsdfsgsff' },
  {
    user_id: '2234',
    id: '2414',
    messageText:
      'fsdfs sgdf Sed ut perspiciatis unde omnis iste  cdfbd dfgd dfgdgsff'
  },
  { user_id: '24554', id: '275714', messageText: 'fsdfsg dfgd dsgd drgdesff' },
  { user_id: '26574', id: '21884', messageText: 'fsd dfgdb fsgsff' },
  { user_id: '25784', id: '29914', messageText: 'fsdfvcbdgfhdbg sgsff' },
  {
    user_id: '2334',
    id: '21465',
    messageText: 'fsdfcdfgdfgb   cfbdfgbdfbd cghfbfsgsff'
  },
  { user_id: '25784', id: '2994514', messageText: 'fsdfvcbdgfhdbg sgsff' },
  { user_id: '214', id: '25rt14', messageText: 'fsdfsgsff' },
  { user_id: '234', id: '21y4674', messageText: 'fsdfsgsff' },
  {
    user_id: '2234',
    id: '24e514',
    messageText:
      'fsdfs sgdf Sed ut perspiciatis unde omnis iste  cdfbd dfgd dfgdgsff'
  },
  {
    user_id: '24554',
    id: '27546714',
    messageText: 'fsdfsg dfgd dsgd drgdesff'
  },
  { user_id: '26574', id: '2182484', messageText: 'fsd dfgdb fsgsff' },
  { user_id: '25784', id: '2991514', messageText: 'fsdfvcbdgfhdbg sgsff' },
  {
    user_id: '2334',
    id: '2146375',
    messageText: 'fsdfcdfgdfgb   cfbdfgbdfbd cghfbfsgsff'
  },
  { user_id: '25784', id: '29945714', messageText: 'fsdfvcbdgfhdbg sgsff' }
];
