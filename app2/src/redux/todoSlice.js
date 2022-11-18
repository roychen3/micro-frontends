import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    toggleItem: (state, action) => {
      const updateIdx = state.list.findIndex(
        (item) => item.id === action.payload
      );
      state.list[updateIdx].isDone = !state.list[updateIdx].isDone;
    },
    deleteItem: (state, action) => {
      const newList = state.list.filter((item) => item.id !== action.payload);
      state.list = newList;
    },
  },
});

export const { addItem, toggleItem, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
