import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserAddState } from "../../types";

const initialState: UserAddState[] = [];

export const registerUser = createAsyncThunk(
  "userAdd/registerUser",
  async (newUser: UserAddState) => {
    try {
      const { data } = await axios.post("/auth/register", newUser);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const userAddSlice = createSlice({
  name: "userAdd",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        console.log(state);
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(state, action);
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log(state, action);
      });
  },
});

export default userAddSlice.reducer;
