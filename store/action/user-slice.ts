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

const initialState: RootState = {
  dataUser: { results: [] },
  status: "idle",
  error: null,
};

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
    setUserData(state, action: PayloadAction<UserData>) {
      state.dataUser = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload.results));
    },
    loadUserDataFromStorage(state) {
      const storedData = localStorage.getItem("userData");
      if (storedData) {
        state.dataUser.results = JSON.parse(storedData);
      }
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
          state.status = "succeeded";
          state.dataUser = action.payload;
          localStorage.setItem(
            "userData",
            JSON.stringify(state.dataUser.results)
          );
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

export const { setUserData, loadUserDataFromStorage } = userDataSlice.actions;

export default userDataSlice;

/*
// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

// const BASE_API = `https://randomuser.me/api/`;

// export interface User {
//   gender: string;
//   name: {
//     title: string;
//     first: string;
//     last: string;
//   };
//   location: {
//     street: {
//       number: number;
//       name: string;
//     };
//     city: string;
//     state: string;
//     country: string;
//     postcode: number;
//     coordinates: {
//       latitude: string;
//       longitude: string;
//     };
//     timezone: {
//       offset: string;
//       description: string;
//     };
//   };
//   email: string;
//   login: {
//     uuid: string;
//     username: string;
//     password: string;
//     salt: string;
//     md5: string;
//     sha1: string;
//     sha256: string;
//   };
//   dob: {
//     date: string;
//     age: number;
//   };
//   registered: {
//     date: string;
//     age: number;
//   };
//   phone: string;
//   cell: string;
//   id: {
//     name: string;
//     value: string;
//   };
//   picture: {
//     large: string;
//     medium: string;
//     thumbnail: string;
//   };
//   nat: string;
//   skills?: string[]; // Add skills to the User interface
// }

// export interface UserData {
//   results: User[];
// }

// export const dummySkills: string[] = [
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
// ];

// const shuffleArray = (array: string[]) => {
//   return array.sort(() => Math.random() - 0.5);
// };

// export interface RootState {
//   dataUser: UserData;
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// const initialState: RootState = {
//   dataUser: { results: [] },
//   status: "idle",
//   error: null,
// };

// export const fetchUserData = createAsyncThunk<
//   UserData,
//   void,
//   { rejectValue: string }
// >("userData/fetchUserData", async (_, thunkAPI) => {
//   try {
//     const response = await axios.get(BASE_API, {
//       params: {
//         results: 12,
//       },
//     });
//     return response.data;
//   } catch (error: any) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// const userDataSlice = createSlice({
//   name: "userData",
//   initialState,
//   reducers: {
//     setUserData(state, action: PayloadAction<UserData>) {
//       state.dataUser = action.payload;
//       localStorage.setItem("userData", JSON.stringify(action.payload.results));
//     },
//     loadUserDataFromStorage(state) {
//       const storedData = localStorage.getItem("userData");
//       if (storedData) {
//         state.dataUser.results = JSON.parse(storedData);
//       }
//     },
//     assignSkills(state) {
//       state.dataUser.results = state.dataUser.results.map((user) => {
//         let shuffledSkills = shuffleArray(dummySkills);
//         user.skills = shuffledSkills.slice(0, 2);
//         return user;
//       });
//       localStorage.setItem("userData", JSON.stringify(state.dataUser.results));
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUserData.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(
//         fetchUserData.fulfilled,
//         (state, action: PayloadAction<UserData>) => {
//           state.status = "succeeded";
//           state.dataUser = action.payload;
//           localStorage.setItem(
//             "userData",
//             JSON.stringify(state.dataUser.results)
//           );
//         }
//       )
//       .addCase(
//         fetchUserData.rejected,
//         (state, action: PayloadAction<string | undefined>) => {
//           state.status = "failed";
//           state.error = action.payload ?? "Failed to fetch user data";
//         }
//       );
//   },
// });

// export const { setUserData, loadUserDataFromStorage, assignSkills } =
//   userDataSlice.actions;

// export default userDataSlice;
*/
