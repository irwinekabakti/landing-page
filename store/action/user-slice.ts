import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API = `https://randomuser.me/api/`;
// const BASE_API = 'https://randomuser.me/api/?results=4'

const initialState = {
  dataUser: [],
  status: "idle",
  error: null,
};

const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(BASE_API, {
        params: {
          results: 12,
        },
      });

      console.log(data, "check from user-slice");
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const dataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.payload;
      });
  },
});

export { fetchUserData };

export default dataSlice;
