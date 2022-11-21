import baseApi from '../store/api/baseApi';
import { ENDPOINTS } from '../constans/constans';
import {
  IDeleteDislikeTopicParams,
  IDeleteLikeTopicParams,
  IGetTopicParams,
  IGetTopicResponse,
  IPostTopicParams,
  IPutDislikeTopicParams,
  IPutLikeTopicParams
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
      }),
      fetchPutLikeTopic: build.mutation<void, IPutLikeTopicParams>({
        query: ({ id, user_id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.TOPIC.PATH}/${id}${ENDPOINTS.LIKES.PATH}`,
          method: 'PUT',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body: { user_id },
          overrideExisting: false
        }),
        invalidatesTags: ['Topics']
      }),
      fetchDeleteLikeTopic: build.mutation<void, IDeleteLikeTopicParams>({
        query: ({ id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.LIKES.PATH}/${id}`,
          method: 'DELETE',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          overrideExisting: false
        }),
        invalidatesTags: ['Topics']
      }),
      fetchPutDislikeTopic: build.mutation<void, IPutDislikeTopicParams>({
        query: ({ id, user_id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.TOPIC.PATH}/${id}${ENDPOINTS.DISLIKES.PATH}`,
          method: 'PUT',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body: { user_id },
          overrideExisting: false
        }),
        invalidatesTags: ['Topics']
      }),
      fetchDeleteDislikeTopic: build.mutation<void, IDeleteDislikeTopicParams>({
        query: ({ id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.DISLIKES.PATH}/${id}`,
          method: 'DELETE',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          overrideExisting: false
        }),
        invalidatesTags: ['Topics']
      })
    })
  });

export const {
  useFetchGetTopicsQuery,
  useFetchGetTopicMutation,
  useFetchPostTopicMutation,
  useFetchPutLikeTopicMutation,
  useFetchDeleteLikeTopicMutation,
  useFetchDeleteDislikeTopicMutation,
  useFetchPutDislikeTopicMutation
} = topicAPI;
