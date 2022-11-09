import baseApi from '../store/api/baseApi';
import { ENDPOINTS } from '../constans/constans';

export const authAPI = baseApi
  .enhanceEndpoints({ addTagTypes: ['UserTheme'] })
  .injectEndpoints({
    endpoints: (build) => ({
      addToUserTheme: build.mutation<any, any>({
        query: (body) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.USERTHEME.PATH}`,
          method: 'POST',
          responseHandler: (response) =>
            response.status === 200 ? response.text() : response.json(),
          body,
          overrideExisting: false
        }),
        invalidatesTags: ['UserTheme']
      }),

      getUserTheme: build.query<any, any>({
        query: ({ id }) => ({
          url: `http://localhost:3000/user-theme/${id}`,
          method: 'GET',
          overrideExisting: false
        }),
        providesTags: ['UserTheme']
      }),

      updateUserTheme: build.mutation<any, any>({
        query: ({ body, id }) => ({
          url: `${ENDPOINTS.LOCALHOST}${ENDPOINTS.USERTHEME.PATH}/${id}`,
          method: 'PUT',
          body
        }),
        invalidatesTags: ['UserTheme']
      })
    })
  });

export const {
  useAddToUserThemeMutation,
  useUpdateUserThemeMutation,
  useGetUserThemeQuery
} = authAPI;
