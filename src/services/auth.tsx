import { IUserResponse } from '../models/IUserResponse';
import { IErrorResponse } from '../models/IErrorResponse';
import {
  ISignInParams,
  ISignInParamsOauth,
  ISignInResponseOauth
} from '../models/ISignInParams';
import { ISignUpParams } from '../models/ISignUpParams';
import baseApi from '../store/api/baseApi';
import { ENDPOINTS } from '../constans/constans';
import { IOauthDataResponse } from '../models/IOauthDataResponse';

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
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body,
          overrideExisting: false
        }),
        invalidatesTags: ['Auth']
      }),
      fetchSignInOauth: build.mutation<
        ISignInResponseOauth,
        ISignInParamsOauth
      >({
        query: (body) => ({
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.AUTH.PATH_OAUTH}${ENDPOINTS.AUTH.YANDEX}`,
          method: 'POST',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body
        }),
        invalidatesTags: ['Auth']
      }),
      fetchOauthData: build.query<IOauthDataResponse, string>({
        query: (redirect_uri) => ({
          params: { redirect_uri },
          url: `${ENDPOINTS.YANDEX}${ENDPOINTS.AUTH.PATH_OAUTH}${ENDPOINTS.AUTH.YANDEX}${ENDPOINTS.AUTH.SERVICE_ID}`,
          method: 'GET'
        }),
        providesTags: ['Auth']
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
  useFetchSignInOauthMutation,
  useFetchOauthDataQuery,
  useFetchLogoutMutation
} = authAPI;
