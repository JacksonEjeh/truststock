import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@/app/utils/AxiosInstance";

const initialState = {
  loading: false,
  user: null,
  accessToken: null,
  error: '',
};

// Helper for posting and error handling
const postWithHandling = async (url, data, rejectWithValue) => {
  try {
    const res = await Api.post(url, data, { withCredentials: true });
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || error.message);
  }
};

export const refreshToken = createAsyncThunk(
  'user/refreshToken', 
  async (_, {rejectWithValue})=> {
    try {
      const res = await Api.post('/auth/refresh-token',  {}, { withCredentials: true });
      return res.data.accessToken;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Token refresh failed');
    }
});

export const loginUser = createAsyncThunk('user/loginUser', (credentials, { rejectWithValue }) =>
  postWithHandling('/auth/signin', credentials, rejectWithValue)
);

export const signUpUser = createAsyncThunk('user/signUpUser', (credentials, { rejectWithValue }) =>
  postWithHandling('/auth/signup', credentials, rejectWithValue)
);

export const verifyOTP = createAsyncThunk('user/verifyOTP', (data, { rejectWithValue }) =>
  postWithHandling('/auth/verify-otp', data, rejectWithValue)
);

export const resendOTP = createAsyncThunk('user/resendOTP', (data, { rejectWithValue }) =>
  postWithHandling('/auth/resend-otp', data, rejectWithValue)
);

export const logOut = createAsyncThunk('user/logOut', (_, { rejectWithValue }) =>
  postWithHandling('/auth/logout', null, rejectWithValue)
);

export const forgetPassword = createAsyncThunk('user/forgetPassword', (data, { rejectWithValue }) =>
  postWithHandling('/auth/forgot-password', data, rejectWithValue)
);

export const resetPassword = createAsyncThunk('user/resetPassword', (data, { rejectWithValue }) =>
  postWithHandling('/auth/reset-password', data, rejectWithValue)
);

export const changePassword = createAsyncThunk('user/changePassword', ( data, { rejectWithValue }) => 
  postWithHandling('auth/change-password', data, rejectWithValue)
)

export const getMe = createAsyncThunk(
    'user/getMe',
    async (_, { rejectWithValue }) => {
        try {
            const res = await Api.get('/user/me', { withCredentials: true});
            return res.data
        } catch (error) {
            rejectWithValue(error.response?.data?.message || error.message)
        }
    }
);
export const updateMe = createAsyncThunk(
    'user/updateMe',
    async (data, { rejectWithValue }) => {
        try {
            const res = await Api.put('/user/update/me', data, { withCredentials: true});
            return res.data
        } catch (error) {
            rejectWithValue(error.response?.data?.message || error.message)
        }
    }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })

      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(verifyOTP.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })

      .addCase(logOut.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
        state.user = null;
        state.accessToken = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.accessToken = null;
        state.error = action.payload;
      })

      .addCase(resendOTP.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(resendOTP.fulfilled, (state) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(resendOTP.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.accessToken = null;
        state.error = action.payload;
      })

      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.user = action.payload;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })
      
      .addCase(forgetPassword.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.user = action.payload;
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })

      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getMe.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.loading = false;
        state.error = ""
        state.user = action.payload.user
      })
      .addCase(getMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateMe.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateMe.fulfilled, (state, action) => {
        state.loading = false;
        state.error = ""
        state.user = action.payload.user
      })
      .addCase(updateMe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.accessToken = null;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { setCredentials, logout } = userSlice.actions;
export default userSlice.reducer;