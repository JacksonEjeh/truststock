import Api from "@/app/utils/AxiosInstance";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    investment_plans: null,
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
    }
})

export default investmentPlanSlice.reducer