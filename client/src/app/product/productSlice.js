import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cloths: [],
    jewelleries: [],
    productError: "No Product To show",
    cartProduct: [],
    cartProductError: "No Product In Cart",
    wishListProduct: [],
    wishListProductError: "No Product In WishList",
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCloth: (state, action) => {
            state.cloths = action.payload
            state.productError = null
        },
        setJewellery: (state, action) => {
            state.jewelleries = action.payload
            state.productError = null
        },
        setProductError: (state, action) => {
            state.productError = action.payload
        },
        addToCart: (state, action) => {
            state.cartProduct = action.payload
            state.cartProductError = null
        },
        addToCartError: (state, action) => {
            state.cartProductError = action.payload
        },
        addToWishList: (state, action) => {
            state.wishListProduct.push(action.payload);
            state.wishListProductError = null
        },
        addToWishListError: (state, action) => {
            state.wishListProductError = action.payload
        },


    }
})

// Action creators are generated for each case reducer function
export const { setCloth, setJewellery, setProductError, addToCart, addToCartError, addToWishList, addToWishListError } = productSlice.actions

export default productSlice.reducer