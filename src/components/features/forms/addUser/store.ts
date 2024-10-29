import { create } from "zustand";

type UserData = {
  fullName: string;
  department: string;
  country: string;
  status: string;
};

type Store = {
  isOpened: boolean;
  userData: UserData | null;
  setIsOpened: (status: boolean) => void;
  setUserData: (data: UserData) => void;
};

export const useUserFormStore = create<Store>((set) => ({
  isOpened: false,
  userData: null,
  setIsOpened: (status) => set({ isOpened: status }),
  setUserData: (data) => set({ userData: data }),
}));