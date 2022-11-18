import baseApi from '../store/api/baseApi';
import { ENDPOINTS } from '../constans/constans';
import {
  IGetTopicParams,
  IGetTopicResponse,
  IPostTopicParams
} from '../models/IForum';

export const topicAPI = baseApi
  .enhanceEndpoints({ addTagTypes: ['Topics'] })
  .injectEndpoints({
    endpoints: (build) => ({
      fetchGetTopics: build.query<IGetTopicResponse[], void>({
        query: () => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.TOPIC.PATH}`,
          method: 'GET',
          overrideExisting: false
        }),
        providesTags: ['Topics']
      }),
      fetchGetTopic: build.mutation<IGetTopicResponse, IGetTopicParams>({
        query: ({ id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.TOPIC.PATH}/${id}`,
          method: 'GET',
          overrideExisting: false
        }),
        invalidatesTags: ['Topics']
      }),
      fetchPostTopic: build.mutation<void, IPostTopicParams>({
        query: (body) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.TOPIC.PATH}`,
          method: 'POST',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body,
          overrideExisting: false
        }),
        invalidatesTags: ['Topics']
      })
    })
  });

export const {
  useFetchGetTopicsQuery,
  useFetchGetTopicMutation,
  useFetchPostTopicMutation
} = topicAPI;
