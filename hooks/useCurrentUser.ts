import { create } from 'zustand';

import { User } from '@/graphql/generated';

type UseCurrentUserResponse = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useCurrentUser = create<UseCurrentUserResponse>((set) => ({
  user: null,
  setUser: (user: User | null) => {
    set({ user });
  },
  // getUser: 
}));
