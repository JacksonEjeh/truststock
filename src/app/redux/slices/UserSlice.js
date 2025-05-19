import Api from "@/app/utils/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    user: null,
    error: '',
};

export const loginUser = createAsyncThunk(
    'user/loginUser',

    async( credentials, { rejectWithValue }) => {
        try {
            const res = await Api.post('/auth/signin', credentials, { withCredentials: true});
            return res.data;
        } catch (error) {
            return rejectWithValue( error.response?.data?.message || error.message )
        }
    }
);
export const signUpUser = createAsyncThunk(
    'user/signUpUser',
    async(credentials, { rejectWithValue }) => {
        try {
            const res = await Api.post(`/auth/signup`, credentials, { withCredentials: true});
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const verifyOTP = createAsyncThunk(
    'user/verifyOTP',
    async( data, { rejectWithValue }) => {
        try {
            const res = await Api.post(`/auth/verify-otp`, data, { withCredentials: true});
            return res.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const resendOTP = createAsyncThunk(
    'user/resendOTP',
    async( data, { rejectWithValue }) => {
        try{
            const res = await Api.post('/auth/resend-otp', data, { withCredentials: true});
            return res.data
        } catch (error){
            return rejectWithValue(error.response?.data?.message || error.message)
        }
    }
);

export const logOut = createAsyncThunk(
    'user/logOut',
    async(_, { rejectWithValue }) => {
        try {
            const res = await Api.post('auth/logout', null, { withCredentials: true });
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message)
        }
    }
);

export const forgetPassword = createAsyncThunk(
    'user/forgetPassword',
    async(data, { rejectWithValue }) => {
        try {
            const res = await Api.post('/auth/forgot-password', data, { withCredentials: true });
            return res.data;
        } catch (error) {
            return rejectWithValue( error.response?.data?.message || error.message );
        }
    }
);

export const resetPassword = createAsyncThunk(
    'user/resetPassword',
    async(data, { rejectWithValue }) => {
        try {
            const res = await Api.post('auth/reset-password', data, { withCredentials: true });
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder
            .addCase(signUpUser.pending, (state)=>{
                state.loading = true;
                state.error = "";
            })
            .addCase(signUpUser.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = "";
            })
            .addCase(signUpUser.rejected, (state, action) => {
                state.loading = false;
                state.user = "";
                state.error = action.payload;
            })
            .addCase(verifyOTP.pending, (state)=>{
                state.loading = true;
                state.error = "";
            })
            .addCase(verifyOTP.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = "";
            })
            .addCase(verifyOTP.rejected, (state, action) => {
                state.loading = false;
                state.user = "";
                state.error = action.payload;
            })
            .addCase(logOut.pending, (state)=>{
                state.loading = true;
                state.error = "";
            })
            .addCase(logOut.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = "";
            })
            .addCase(logOut.rejected, (state, action) => {
                state.loading = false;
                state.user = "";
                state.error = action.payload;
            })
            .addCase(resendOTP.pending, (state)=>{
                state.loading = true;
                state.error = "";
            })
            .addCase(resendOTP.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = "";
            })
            .addCase(resendOTP.rejected, (state, action) => {
                state.loading = false;
                state.user = "";
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state)=>{
                state.loading = true;
                state.error = "";
            })
            .addCase(loginUser.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = "";
                state.user = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = "";
                state.error = action.payload;
            })
            .addCase(resetPassword.pending, (state)=>{
                state.loading = true;
                state.error = "";
            })
            .addCase(resetPassword.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = "";
                state.user = action.payload
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.loading = false;
                state.user = "";
                state.error = action.payload;
            })
            .addCase(forgetPassword.pending, (state)=>{
                state.loading = true;
                state.error = "";
            })
            .addCase(forgetPassword.fulfilled, (state, action)=>{
                state.loading = false;
                state.error = "";
                state.user = action.payload
            })
            .addCase(forgetPassword.rejected, (state, action) => {
                state.loading = false;
                state.user = "";
                state.error = action.payload;
            })
    }
});

export default userSlice.reducer;