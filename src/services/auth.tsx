import { IUserResponse } from '../models/IUserResponse';
import { IErrorResponse } from '../models/IErrorResponse';
import { ISignInParams } from '../models/ISignInParams';
import { ISignUpParams } from '../models/ISignUpParams';
import baseApi from '../store/api/baseApi';
import { ENDPOINTS } from '../contans/constans';

export const authAPI = baseApi
  .enhanceEndpoints({ addTagTypes: ['Auth'] })
  .injectEndpoints({
    endpoints: (build) => ({
      fetchUser: build.query<IUserResponse, void>({
        query: () => ({
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.AUTH.PATH}${ENDPOINTS.AUTH.USER}`,
          method: 'GET',
          overrideExisting: false
        }),
        providesTags: ['Auth']
      }),
      fetchSignIn: build.mutation<IErrorResponse, ISignInParams>({
        query: (body) => ({
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.AUTH.PATH}${ENDPOINTS.AUTH.SIGNIN}`,
          method: 'POST',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body,
          overrideExisting: false
        }),
        invalidatesTags: ['Auth']
      }),
      fetchSignUp: build.mutation<IUserResponse, ISignUpParams>({
        query: (body) => ({
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.AUTH.PATH}${ENDPOINTS.AUTH.SIGNUP}`,
          method: 'POST',
          body,
          overrideExisting: false
        }),
        invalidatesTags: ['Auth']
      }),
      fetchLogout: build.mutation<IUserResponse, void>({
        query: () => ({
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.AUTH.PATH}${ENDPOINTS.AUTH.LOGOUT}`,
          method: 'POST',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json()
        })
      })
    })
  });

export const {
  useFetchUserQuery,
  useFetchSignInMutation,
  useFetchSignUpMutation,
  useFetchLogoutMutation
} = authAPI;
