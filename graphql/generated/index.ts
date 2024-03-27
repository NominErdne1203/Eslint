import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  createUserCategory?: Maybe<UserCategory>;
  deleteUser?: Maybe<User>;
  deleteUserCategory?: Maybe<User>;
  updateUser: User;
  updateUserCategory?: Maybe<UserCategory>;
};

export type MutationCreateUserArgs = {
  input: UserCreateInput;
};

export type MutationCreateUserCategoryArgs = {
  input: UserCategoryCreateInput;
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUserCategoryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
};

export type MutationUpdateUserCategoryArgs = {
  input: UserCategoryUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<Array<Maybe<User>>>;
  getCategory?: Maybe<User>;
  getUser?: Maybe<User>;
  getUserList: Array<User>;
};

export type QueryGetCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  bio?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
};

export type UserCategory = {
  __typename?: 'UserCategory';
  bio: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type UserCategoryCreateInput = {
  bio: Scalars['String']['input'];
  email: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserCategoryUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserCreateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserUpdateInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = object, TContext = object, TArgs = object> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<unknown, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, unknown, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = object,
  TContext = object,
  TArgs = object,
> =
  | ((...args: unknown[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = object, TContext = object> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = object, TContext = object> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = object,
  TParent = object,
  TContext = object,
  TArgs = object,
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<object>;
  Query: ResolverTypeWrapper<object>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserCategory: ResolverTypeWrapper<UserCategory>;
  UserCategoryCreateInput: UserCategoryCreateInput;
  UserCategoryUpdateInput: UserCategoryUpdateInput;
  UserCreateInput: UserCreateInput;
  UserUpdateInput: UserUpdateInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Mutation: object;
  Query: object;
  String: Scalars['String']['output'];
  User: User;
  UserCategory: UserCategory;
  UserCategoryCreateInput: UserCategoryCreateInput;
  UserCategoryUpdateInput: UserCategoryUpdateInput;
  UserCreateInput: UserCreateInput;
  UserUpdateInput: UserUpdateInput;
};

export type MutationResolvers<
  ContextType = unknown,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  createUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'input'>
  >;
  createUserCategory?: Resolver<
    Maybe<ResolversTypes['UserCategory']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserCategoryArgs, 'input'>
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'id'>
  >;
  deleteUserCategory?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserCategoryArgs, 'id'>
  >;
  updateUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'input'>
  >;
  updateUserCategory?: Resolver<
    Maybe<ResolversTypes['UserCategory']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserCategoryArgs, 'input'>
  >;
};

export type QueryResolvers<
  ContextType = unknown,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  getCategories?: Resolver<Maybe<Maybe<ResolversTypes['User']>[]>, ParentType, ContextType>;
  getCategory?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<QueryGetCategoryArgs>
  >;
  getUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    Partial<QueryGetUserArgs>
  >;
  getUserList?: Resolver<ResolversTypes['User'][], ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = unknown,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCategoryResolvers<
  ContextType = unknown,
  ParentType extends ResolversParentTypes['UserCategory'] = ResolversParentTypes['UserCategory'],
> = {
  bio?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = unknown> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserCategory?: UserCategoryResolvers<ContextType>;
};

export type UserFragment = {
  __typename?: 'User';
  id: string;
  email: string;
  password: string;
  image: string;
  name: string;
};

export type GetUserListQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserListQuery = {
  __typename?: 'Query';
  getUserList: {
    __typename?: 'User';
    id: string;
    email: string;
    password: string;
    image: string;
    name: string;
  }[];
};

export type GetUserQueryVariables = Exact<{
  getUserId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  getUser?: {
    __typename?: 'User';
    id: string;
    email: string;
    password: string;
    image: string;
    name: string;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  input: UserCreateInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: {
    __typename?: 'User';
    id: string;
    email: string;
    password: string;
    image: string;
    name: string;
  };
};

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser?: { __typename?: 'User'; id: string; email: string; password: string } | null;
};

export type UpdateUserMutationVariables = Exact<{
  input: UserUpdateInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser: { __typename?: 'User'; id: string; email: string; password: string; name: string; image: string; };
};

export const UserFragmentDoc = gql`
  fragment User on User {
    id
    email
    password
  }
`;
export const GetUserListDocument = gql`
  query GetUserList {
    getUserList {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useGetUserListQuery__
 *
 * To run a query within a React component, call `useGetUserListQuery` and pass it unknownoptions that fit your needs.
 * When your component renders, `useGetUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserListQuery, GetUserListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserListQuery, GetUserListQueryVariables>(GetUserListDocument, options);
}
export function useGetUserListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserListQuery, GetUserListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserListQuery, GetUserListQueryVariables>(
    GetUserListDocument,
    options,
  );
}
export function useGetUserListSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserListQuery, GetUserListQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserListQuery, GetUserListQueryVariables>(
    GetUserListDocument,
    options,
  );
}
export type GetUserListQueryHookResult = ReturnType<typeof useGetUserListQuery>;
export type GetUserListLazyQueryHookResult = ReturnType<typeof useGetUserListLazyQuery>;
export type GetUserListSuspenseQueryHookResult = ReturnType<typeof useGetUserListSuspenseQuery>;
export type GetUserListQueryResult = Apollo.QueryResult<
  GetUserListQuery,
  GetUserListQueryVariables
>;
export const GetUserDocument = gql`
  query GetUser($getUserId: ID) {
    getUser(id: $getUserId) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it unknownoptions that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      getUserId: // value for 'getUserId'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export function useGetUserSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CreateUserDocument = gql`
  mutation CreateUser($input: UserCreateInput!) {
    createUser(input: $input) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it unknownoptions that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at unknowntime to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it unknownoptions that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at unknowntime to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options,
  );
}
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser($input: UserUpdateInput!) {
    updateUser(input: $input) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it unknownoptions that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at unknowntime to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
