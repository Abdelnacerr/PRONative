import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { user } from '../../interfaces/user'
import { Jsonplaceholder } from '../settings/endpoints'

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: Jsonplaceholder,
	}),
	tagTypes: ['Users'],
	endpoints: (builder) => ({
		getUsers: builder.query<user[], number | void>({
			query: () => `users`,
			providesTags: [{ type: 'Users', id: 'LIST' }],
		}),
	}),
})
