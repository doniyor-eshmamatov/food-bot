import { createSlice } from '@reduxjs/toolkit';


const rootSlice = createSlice({
    name: 'store',
    initialState: {
        products: [
            {
                id: 1,
                name: 'Hot Dog',
                price: 15000,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
            },
            {
                id: 2,
                name: 'Hot Dog',
                price: 18000,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
            },
            {
                id: 3,
                name: 'Hot Dog',
                price: 18000,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
            },
            {
                id: 4,
                name: 'Hot Dog',
                price: 18000,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
            },
            {
                id: 5,
                name: 'Hot Dog',
                price: 18000,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
            }
        ],
        cartList: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartList.push(action.payload)
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
        }
    },
});

export const { addToCart, upCart, downCart } = rootSlice.actions;

export default rootSlice.reducer;
