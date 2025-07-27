import { create } from "zustand";

interface UserState {
  token: string | null;
  userInfo: Object | null;
  setToken: (token: string) => void;
  setUserInfo: (userInfo: Object) => void;
  clearToken: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  token: null,
  userInfo: null,
  setToken: (token) => set({ token }),
  setUserInfo: (userInfo) => set({ userInfo }),
  clearToken: () => set({ token: null }),
}));
