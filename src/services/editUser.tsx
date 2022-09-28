import { ENDPOINTS } from '../constans/constans';
import {
  IEditUserProfileParams,
  IEditUserProfileParamsResponse
} from '../models/IUser';
import baseApi from '../store/api/baseApi';

export const userAPI = baseApi
  .enhanceEndpoints({ addTagTypes: ['User'] })
  .injectEndpoints({
    endpoints: (build) => ({
      editProfile: build.mutation<
        IEditUserProfileParamsResponse,
        IEditUserProfileParams
      >({
        query: (body) => ({
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.USER.PATH}${ENDPOINTS.USER.PROFILE}`,
          method: 'PUT',
          body
        }),
        invalidatesTags: ['User']
      }),
      editAvatar: build.mutation<IEditUserProfileParamsResponse, FormData>({
        query: (body) => ({
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.USER.PATH}${ENDPOINTS.USER.PROFILE}${ENDPOINTS.USER.AVATAR}`,
          method: 'PUT',
          body
        }),
        invalidatesTags: ['User']
      })
    })
  });

export const { useEditProfileMutation, useEditAvatarMutation } = userAPI;
