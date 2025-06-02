import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const { default: Api } = require("@/app/utils/AxiosInstance");

const initialState = {
    loading: false,
    wallet: null,
    transactions: null,
    transaction_loader: null,
    error: ''
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

export const initiateDeposit = createAsyncThunk('wallet/initiateDeposit', (data, { rejectWithValue })=>
    postWithHandling('wallet/deposit', data, rejectWithValue )
);

export const getWallet = createAsyncThunk(
    'wallet/getWallet',
    async (_, { rejectWithValue }) => {
        try {
            const res = await Api.get('/wallet', { withCredentials: true});
            return res.data
        } catch (error) {
            rejectWithValue(error.response?.data?.message || error.message)
        }
    }
);
export const getTransactionHistory = createAsyncThunk(
    'wallet/getTransactionHistory',
    async (_, { rejectWithValue }) => {
        try {
            const res = await Api.get('/wallet/transactions', { withCredentials: true});
            return res.data
        } catch (error) {
            rejectWithValue(error.response?.data?.message || error.message)
        }
    }
);
const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWallet.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(getWallet.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
                state.wallet = action.payload.wallet
            })
            .addCase(getWallet.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(initiateDeposit.pending, (state) => {
                state.loading = true;
                state.error = "";
            })
            .addCase(initiateDeposit.fulfilled, (state, action) => {
                state.loading = false;
                state.error = "";
            })
            .addCase(initiateDeposit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(getTransactionHistory.pending, (state) => {
                state.transaction_loader = true;
                state.error = "";
            })
            .addCase(getTransactionHistory.fulfilled, (state, action) => {
                state.transaction_loader = false;
                state.error = "";
                state.transactions = action.payload
            })
            .addCase(getTransactionHistory.rejected, (state, action) => {
                state.transaction_loader = false;
                state.error = action.payload
            })
    }
});

export default walletSlice.reducer;
