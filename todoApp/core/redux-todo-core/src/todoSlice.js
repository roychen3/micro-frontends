import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const data = {
        id: new Date().getTime(),
        content: action.payload,
        isDone: false,
      };
      state.list.push(data);
    },
    toggleItem: (state, action) => {
      const newList = state.list.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        }
        return item;
      });
      state.list = newList;
    },
    deleteItem: (state, action) => {
      const newList = state.list.filter((item) => item.id !== action.payload);
      state.list = newList;
    },
  },
});

export const { addItem, toggleItem, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;
