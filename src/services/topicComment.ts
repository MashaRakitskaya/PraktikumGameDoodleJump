import baseApi from '../store/api/baseApi';
import { ENDPOINTS } from '../constans/constans';
import {
  IDeleteDislikeTopicCommentParams,
  IDeleteLikeTopicCommentParams,
  IPostTopicCommentParams,
  IPutDislikeTopicCommentParams,
  IPutLikeTopicCommentParams
} from '../models/IForum';

export const topicCommentAPI = baseApi
  .enhanceEndpoints({ addTagTypes: ['TopicComment'] })
  .injectEndpoints({
    endpoints: (build) => ({
      fetchPostTopicComment: build.mutation<void, IPostTopicCommentParams>({
        query: (body) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.TOPICCOMMENT.PATH}`,
          method: 'POST',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body,
          overrideExisting: false
        }),
        invalidatesTags: ['TopicComment']
      }),
      fetchPutLikeTopicComment: build.mutation<
        void,
        IPutLikeTopicCommentParams
      >({
        query: ({ id, user_id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.TOPICCOMMENT.PATH}/${id}${ENDPOINTS.LIKES.PATH}`,
          method: 'PUT',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body: { user_id },
          overrideExisting: false
        }),
        invalidatesTags: ['TopicComment']
      }),
      fetchDeleteLikeTopicComment: build.mutation<
        void,
        IDeleteLikeTopicCommentParams
      >({
        query: ({ id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.LIKES.PATH}/${id}`,
          method: 'DELETE',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          overrideExisting: false
        }),
        invalidatesTags: ['TopicComment']
      }),
      fetchPutDislikeTopicComment: build.mutation<
        void,
        IPutDislikeTopicCommentParams
      >({
        query: ({ id, user_id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.TOPICCOMMENT.PATH}/${id}${ENDPOINTS.DISLIKES.PATH}`,
          method: 'PUT',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body: { user_id },
          overrideExisting: false
        }),
        invalidatesTags: ['TopicComment']
      }),
      fetchDeleteDislikeTopicComment: build.mutation<
        void,
        IDeleteDislikeTopicCommentParams
      >({
        query: ({ id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.DISLIKES.PATH}/${id}`,
          method: 'DELETE',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          overrideExisting: false
        }),
        invalidatesTags: ['TopicComment']
      })
    })
  });

export const {
  useFetchPostTopicCommentMutation,
  useFetchDeleteDislikeTopicCommentMutation,
  useFetchDeleteLikeTopicCommentMutation,
  useFetchPutDislikeTopicCommentMutation,
  useFetchPutLikeTopicCommentMutation
} = topicCommentAPI;
