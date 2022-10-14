import { ENDPOINTS } from '../constans/constans';
import { IErrorResponse } from '../models/IErrorResponse';
import { IGetLeaderboardParams } from '../models/IGedLeaderBoardParams';
import {
  ILeaderboardAddPlayer,
  ILeaderboardItem,
  ILeaderboardItemTransformed
} from '../models/ILeaderBoardResponse';
import baseApi from '../store/api/baseApi';

export const leaderboardAPI = baseApi
  .enhanceEndpoints({ addTagTypes: ['Leaderboard'] })
  .injectEndpoints({
    endpoints: (build) => ({
      fetchTeamLeaderboard: build.mutation<
        ILeaderboardItemTransformed[],
        IGetLeaderboardParams
      >({
        query: (body) => ({
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.LEADERBOARD.PATH}${ENDPOINTS.LEADERBOARD.TEAM}`,
          method: 'POST',
          body
        }),
        transformResponse: (response: ILeaderboardItem[]) =>
          response.map((r) => ({
            ...r.data,
            id: r.data.name + r.data.score
          })),
        invalidatesTags: ['Leaderboard']
      }),
      addPlayerToLeaderboard: build.mutation<
        IErrorResponse,
        ILeaderboardAddPlayer
      >({
        query: (body) => ({
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.LEADERBOARD.PATH}`,
          method: 'POST',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body
        }),

        invalidatesTags: ['Leaderboard']
      })
    })
  });

export const {
  useFetchTeamLeaderboardMutation,
  useAddPlayerToLeaderboardMutation
} = leaderboardAPI;
