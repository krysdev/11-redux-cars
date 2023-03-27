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
      // action.payload === { name: 'string'}
      state.name = action.payload;
    },

    changeCost(state, action) {
      // action.payload === { cost: 999}
      state.cost = action.payload;
    },
  },
});

// action creators
export const { changeName, changeCost } = formSlice.actions;

// combined reducer (no 'S' at the end - one combined reducer)
export const formReducer = formSlice.reducer;
