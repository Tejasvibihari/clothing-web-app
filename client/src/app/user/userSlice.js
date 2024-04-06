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
        signupStart: (state) => {
            state.loading = true;
        },
        signupSuccess: (state, action) => {
            state.loading = false;
            state.error = null;
        },
        signupError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
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
export const { signupStart, signupSuccess, signupError, signinStart, signinSuccess, signinFailure } = userSlice.actions

export default userSlice.reducer