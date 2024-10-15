import { create } from "zustand";

const useNewWord = create((set) => ({
  word: "",

  setWord: (wordNew) => {
    if (!wordNew.trim()) return;

    set((state) => ({
      word: wordNew,
    }));
  },
}));

export default useNewWord;
