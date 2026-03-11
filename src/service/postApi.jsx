import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const postApi = createApi({

    reducerPath: 'postApi',

    baseQuery: fetchBaseQuery({

        baseUrl: "http://localhost:8000/"

    }),

    endpoints: (builder) => ({

        getPosts: builder.query({

            query: () => 'products'

        })

    })

})



export const { useGetPostsQuery } = postApi