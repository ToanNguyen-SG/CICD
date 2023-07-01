import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface CartState {
  cartItems: string[]
}

const initialState: CartState = {
  cartItems: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      state.cartItems.push('test')
    },

    decrement: (state, action: PayloadAction<string>) => {
      state.cartItems.push('test')
    },
  },
})

const cartItems = (state: RootState) => state.cart.cartItems

export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer
