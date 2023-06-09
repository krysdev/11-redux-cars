// 'nanoid' generates a random ID
import { createSlice, nanoid } from '@reduxjs/toolkit';

// it is for the list of cars and the search term
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // action.payload === { name: 'string', cost: 999}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(), // random id
      });
    },
    removeCar(state, action) {
      // action.payload === id of the car to be removed
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
