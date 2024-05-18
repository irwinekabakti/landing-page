import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_API = `https://randomuser.me/api/`;

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface UserData {
  results: User[];
}

export interface RootState {
  dataUser: UserData;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const loadInitialState = (): RootState => {
  const storedData = localStorage.getItem("userData");
  if (storedData) {
    return {
      dataUser: { results: JSON.parse(storedData) },
      status: "idle",
      error: null,
    };
  }
  return {
    dataUser: { results: [] },
    status: "idle",
    error: null,
  };
};

const initialState: RootState = loadInitialState();

export const fetchUserData = createAsyncThunk<
  UserData,
  void,
  { rejectValue: string }
>("userData/fetchUserData", async (_, thunkAPI) => {
  try {
    const response = await axios.get(BASE_API, {
      params: {
        results: 12,
      },
    });
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getUserData(state) {
      localStorage.setItem("userData", JSON.stringify(state.dataUser.results));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          if (!localStorage.getItem("userData")) {
            state.status = "succeeded";
            state.dataUser = action.payload;
            localStorage.setItem(
              "userData",
              JSON.stringify(state.dataUser.results)
            );
          }
        }
      )
      .addCase(
        fetchUserData.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.status = "failed";
          state.error = action.payload ?? "Failed to fetch user data";
        }
      );
  },
});

export const { getUserData } = userDataSlice.actions;

export default userDataSlice;

/*
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
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.status = "failed";
        // state.error = action.payload;
      });
  },
});

export { fetchUserData };

export default dataSlice;
*/
