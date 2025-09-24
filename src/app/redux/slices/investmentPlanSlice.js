import Api from "@/app/utils/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    investment_plans: null,
    user_investment: null,
    error: null
}


export const getAllInvestmentPlan = createAsyncThunk(
    'investment_plan/getAllInvestmentPlan',
    async(_, {rejectWithValue}) => {
        try {
            const res = await Api.get('/investment-plans', { withCredentials: true});
            return res.data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)
export const getAllUserInvestment = createAsyncThunk(
    'investment_plan/getAllUserInvestment',
    async(status="", {rejectWithValue}) => {
        try {
            const res = await Api.get(`/investments/user?status=${status}`, { withCredentials: true});
            return res.data
        } catch (error) {
            rejectWithValue(error)
        }
    }
)

const investmentPlanSlice = createSlice({
    name: 'investment_plan',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllInvestmentPlan.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getAllInvestmentPlan.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.investment_plans = action.payload?.data
            })
            .addCase(getAllInvestmentPlan.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAllUserInvestment.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(getAllUserInvestment.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.user_investment = action.payload?.data
            })
            .addCase(getAllUserInvestment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export default investmentPlanSlice.reducer