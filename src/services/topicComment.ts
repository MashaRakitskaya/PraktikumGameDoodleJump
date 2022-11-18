import baseApi from '../store/api/baseApi';
import { ENDPOINTS } from '../constans/constans';
import { IPostTopicCommentParams } from '../models/IForum';

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
      })
    })
  });

export const { useFetchPostTopicCommentMutation } = topicCommentAPI;
