import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRepo, IServerResponse, IUser } from '../../types/github.response.api';

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
    getUserRepos: query<IRepo[], string>({
      query: (userName) => ({
        url: `users/${userName}/repos`,
      })
    })
  }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
