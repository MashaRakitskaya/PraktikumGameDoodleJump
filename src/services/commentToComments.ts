import baseApi from '../store/api/baseApi';
import { ENDPOINTS } from '../constans/constans';
import { IPostCommentToCommentsParams } from '../models/IForum';

export const commentToCommentAPI = baseApi
  .enhanceEndpoints({ addTagTypes: ['CommentToComment'] })
  .injectEndpoints({
    endpoints: (build) => ({
      fetchPostCommentToComments: build.mutation<
        void,
        IPostCommentToCommentsParams
      >({
        query: (body) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.COMMENTTOCOMMENTS.PATH}`,
          method: 'POST',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body,
          overrideExisting: false
        }),
        invalidatesTags: ['CommentToComment']
      })
    })
  });

export const { useFetchPostCommentToCommentsMutation } = commentToCommentAPI;
