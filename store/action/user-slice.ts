import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API = `https://randomuser.me/api/`;

interface dataUserProps {
  results: any[];
}
export interface RootState {
  dataUser: dataUserProps;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// let skills:string = [
//   "Banking and Finance",
//   "Capital Markets",
//   "Commercial Contracts",
//   "Compliance and Investigations",
//   "Mega Projects and State Owned Enterprises",
//   "Corporate and M&A",
//   "Dispute Resolution and Litigation",
//   "Employment",
//   "Intellectual Property",
//   "Technology & Data Protection",
//   "Restructuring and Insolvency",
//   "Government",
// ]

const initialState: RootState = {
  dataUser: {
    results: [],
  },
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

      return data;
    } catch (error) {
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
        state.dataUser = action.payload; // Update dataUser with the fetched data
        /*
        state.dataUser.results = action.payload.map((user: User) => {
          const shuffledSkills = [...skills].sort(() => Math.random() - 0.5);
          const assignedSkills = shuffledSkills.slice(0, 2);
          return {
            ...user,
            skills: assignedSkills,
          };
        });
        */
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.payload;
      });
  },
});

export { fetchUserData };

export default dataSlice;
