import {
  createSlice
} from "@reduxjs/toolkit"

const initialState = {

  items: [],

  totalQuantity: 0,

  totalPrice: 0,
}

const cartSlice = createSlice({

  name: "cart",

  initialState,

  reducers: {

    addToCart: (state, action) => {

      const food = action.payload

      const existingItem =
        state.items.find(
          item => item.id === food.id
        )

      if (existingItem) {

        existingItem.quantity += 1

      } else {

        state.items.push({
          ...food,
          quantity: 1,
        })
      }

      state.totalQuantity += 1

      state.totalPrice += food.price
    },

    removeFromCart: (state, action) => {

      const id = action.payload

      const existingItem =
        state.items.find(
          item => item.id === id
        )

      if (!existingItem) return

      existingItem.quantity -= 1

      state.totalQuantity -= 1

      state.totalPrice -= existingItem.price

      if (existingItem.quantity === 0) {

        state.items =
          state.items.filter(
            item => item.id !== id
          )
      }
    },

    clearCart: (state) => {

      state.items = []

      state.totalQuantity = 0

      state.totalPrice = 0
    }
  }
})

export const {

  addToCart,
  removeFromCart,
  clearCart

} = cartSlice.actions

export default cartSlice.reducer