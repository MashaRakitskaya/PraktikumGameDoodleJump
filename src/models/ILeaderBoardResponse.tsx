export interface ILeaderboardItem {
  data: {
    name: string;
    score: number;
    urlImg: string;
  };
}

export interface ILeaderboardItemTransformed {
  id: string;
  name: string;
  score: number;
  urlImg: string;
}

export interface ILeaderboardAddPlayer {
  data: {
    score: number;
    name: string;
    urlImg: string;
  };
  ratingFieldName: string;
  teamName: string;
}
