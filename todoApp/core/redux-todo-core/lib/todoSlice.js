import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchTodoListApi,
  addItemApi,
  updateItemApi,
  deleteItemApi,
} from 'todo-api';

const initialState = {
  list: [],
  loading: false,
  error: '',
  currentRequestId: undefined,
};

export const fetchTodoList = createAsyncThunk(
  'todo/fetchTodoList',
  async (_, thunkAPI) => {
    try {
      const res = await fetchTodoListApi();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addItem = createAsyncThunk(
  'todo/addItem',
  async (title, thunkAPI) => {
    try {
      const res = await addItemApi(title);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleItem = createAsyncThunk(
  'todo/toggleItem',
  async (data, thunkAPI) => {
    try {
      const postData = {
        ...data,
        completed: !data.completed,
      };
      const res = await updateItemApi(postData);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'todo/deleteItem',
  async (id, thunkAPI) => {
    try {
      await deleteItemApi(id);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoList.pending, (state, action) => {
        state.loading = true;
        state.list = initialState.list;
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(fetchTodoList.fulfilled, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.list = action.payload;
        }
      })
      .addCase(fetchTodoList.rejected, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.error = action.payload;
        }
      })
      .addCase(addItem.pending, (state, action) => {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.list.unshift(action.payload);
        }
      })
      .addCase(addItem.rejected, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.error = action.payload;
        }
      })
      .addCase(toggleItem.pending, (state, action) => {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(toggleItem.fulfilled, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          const index = state.list.findIndex(
            (todo) => todo.id === action.payload.id
          );
          if (index !== -1) {
            state.list.splice(index, 1, action.payload);
          }
        }
      })
      .addCase(toggleItem.rejected, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.error = action.payload;
        }
      })
      .addCase(deleteItem.pending, (state, action) => {
        state.loading = true;
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          const newList = state.list.filter(
            (item) => item.id !== action.payload
          );
          state.list = newList;
        }
      })
      .addCase(deleteItem.rejected, (state, action) => {
        if (state.currentRequestId === action.meta.requestId) {
          state.loading = false;
          state.error = action.payload;
        }
      });
  },
});

export const {} = todoSlice.actions;

export default todoSlice.reducer;
