import { create } from "zustand";

type Store = {
  isInputChanged: boolean;
  setIsInputChanged: (status: boolean) => void;
};

export const useEditFormStore = create<Store>((set) => ({
  isInputChanged: false,
  setIsInputChanged: (status) => set({ isInputChanged: status }),
}));
