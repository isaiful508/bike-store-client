import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query<any[], void>({
      query: () => '/users',
    }),
    toggleUserStatus: builder.mutation({
      query: ({ userId, isActive }) => ({
          url: `/user/${userId}`,
          method: "PUT",
          body: { isActive }, // Send new status in request body
      }),
    }),
  }),
});

export const { useGetAllUserQuery, useToggleUserStatusMutation } = authApi;