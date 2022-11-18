import dogImg from '../images/photoDog.png';
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
  title: string;
  points: number;
  urlImg: string;
}

export const leaderboardList: LeaderboardListProps[] = [
  {
    id: '1',
    title: 'Elena List',
    points: 1246434,
    urlImg: `${dogImg}`
  },
  {
    id: '2',
    title: 'Tom Bolan',
    points: 100460,
    urlImg: `${dogImg}`
  },
  {
    id: '11',
    title: 'Dil Posan',
    points: 123224,
    urlImg: `${dogImg}`
  }
];
