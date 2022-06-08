import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../fakeData";

const initialState = {
  value: UsersData,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, name: action.payload.name, username: action.payload.username };
        }
        return item;
      });
      // eslint-disable-next-line no-return-assign
    //   state.value.map((x) => (x.id === action.payload.id ? x.username = action.payload.username : x));
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;

export default userSlice.reducer;
