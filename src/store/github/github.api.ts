import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IServerResponse, IUser } from '../../types/github.response.api';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  refetchOnFocus: true,
  endpoints: ({ query }) => ({
    searchUsers: query<IUser[], string>({
      query: (search: string) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        }
      }),
      transformResponse: (response: IServerResponse) => response.items,
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;
