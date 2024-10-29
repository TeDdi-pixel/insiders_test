import { create } from "zustand";

type Store = {
  activeButton: string;
  setActiveButton: (buttonText: string) => void;
};
export const useHeaderStore = create<Store>((set) => ({
  activeButton: "Edit users",
  setActiveButton: (buttonText) => set(() => ({ activeButton: buttonText })),
}));
