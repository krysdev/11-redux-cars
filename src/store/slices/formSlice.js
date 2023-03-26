import { createSlice } from '@reduxjs/toolkit';

// it is for the FORM fields: car name and car cost (CarForm.js)
const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },

    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
});

// action creators
export const { changeName, changeCost } = formSlice.actions;

// combined reducer (no 'S' at the end - one combined reducer)
export const formReducer = formSlice.reducer;
