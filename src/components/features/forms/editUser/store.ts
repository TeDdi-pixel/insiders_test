import { create } from "zustand";

type Store = {
  isInputChanged: boolean;
  fullName: string;
  setFullName: (name: string) => void;
  setIsInputChanged: (status: boolean) => void;
};

export const useEditFormStore = create<Store>((set) => ({
  isInputChanged: false,
  fullName: "",
  setIsInputChanged: (status) => set({ isInputChanged: status }),
  setFullName: (name) => set({ fullName: name }),
}));
