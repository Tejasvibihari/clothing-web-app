import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice.js"
import productReducer from "./product/productSlice.js"

export default configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
    }
})