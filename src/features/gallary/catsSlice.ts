import { createSlice } from "@reduxjs/toolkit";

export interface CatItem {
  id: string;
  upvotes: number;
}

const initialState: CatItem[] = [];

const catsSlice = createSlice({
  name: "cats",
  initialState: {
    cats: initialState,
  },
  reducers: {
    setCats: (state, action) => {
      state.cats = action.payload;
    },
    upVoteCat: (state, action) => {
      const foundCat = state.cats.find(
        (catItem) => catItem.id === action.payload
      );

      if (foundCat) {
        foundCat.upvotes += 1;
      }
    },
    resetUpVoteCat: (state, action) => {
      const foundCat = state.cats.find(
        (catItem) => catItem.id === action.payload
      );

      if (foundCat) {
        foundCat.upvotes = 0;
      }
    },
    resetAllCats: (state) => {
      state.cats.forEach((cat) => (cat.upvotes = 0));
    },
  },
});

export const { setCats, upVoteCat, resetUpVoteCat, resetAllCats } = catsSlice.actions;

export default catsSlice.reducer;
