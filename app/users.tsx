import { useGetUserListQuery } from '../graphql/generated';

export const GetAllUsers = (): { data: unknown; loading: boolean; error: unknown } => {
  const { data, loading, error } = useGetUserListQuery();
  return { data, loading, error };
};

// export const getAllUsers = (): User[] => {
//   const { loading, error, data } = GetAllUsers();

//   if (Boolean(data)) {
//     return data.getUserList;
//   }
//   if (Boolean(loading)) {
//     console.log(error.message);
//   }
//   if (Boolean(error)) {
//     console.error(error.message);
//   }

//   return [];
// };
// export const getUserList = (): User[] => {
//   const [GetUserListQuery, { data, loading, error }] = useGetUserListQuery();

//   if (Boolean(data)) {
//     return data.getUserList;
//   }
//   if (Boolean(loading)) {
//      console.log(error.message);
//   }
//   if (Boolean(error)) {
//     console.error(error.message);
//   }
// };
