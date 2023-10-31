import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => "/users"
        })
    })

})

export const { useGetAllUsersQuery } = usersApi;