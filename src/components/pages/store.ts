import { create } from "zustand";

type Store = {
  isOpened: boolean;
  setIsOpened: (status: boolean) => void;
};

export const useUserFormStore = create<Store>((set) => ({
  isOpened: false,
  setIsOpened: (status) => set({ isOpened: status }),
}));
