import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    user: null,
    error: null,
    loading: false
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signinStart: (state) => {
            state.loading = true;
        },
        signinSuccess: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        signinFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
})

// Action creators are generated for each case reducer function
export const { signinStart, signinSuccess, signinFailure } = userSlice.actions

export default userSlice.reducer