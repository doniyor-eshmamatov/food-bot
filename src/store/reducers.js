import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: 'store',
    initialState: {
        products: [],
        categories: [],
        cartList: [],
        me: '',
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartList.push(action.payload)
        },
        removeOnCart: (state, action) => {
            const arr = state.cartList.filter(el => el.id !== action.payload.id)
            state.cartList = arr
        },
        clearCart: (state, action) => {
            state.cartList = []
        },
        upCart: (state, action) => {
            const item = { ...state.cartList.find(el => el.id === action.payload.id), count: action.payload.count }
            const itemIndex = state.cartList.findIndex(el => el.id === action.payload.id)
            state.cartList.splice(itemIndex, 1, item)
        },
        downCart: (state, action) => {
            const item = { ...state.cartList.find(el => el.id === action.payload.id), count: action.payload.count }
            const itemIndex = state.cartList.findIndex(el => el.id === action.payload.id)
            state.cartList.splice(itemIndex, 1, item)
        },
        setCategories: (state, action) => {
            state.categories = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setMe: (state, action) => {
            localStorage.setItem('_disdbfofnwoejndfc', action.payload)
            state.me = action.payload
        }
    },
});

export const { addToCart, upCart, downCart, setCategories, removeOnCart, clearCart, setProducts, setMe } = rootSlice.actions;

export default rootSlice.reducer;
