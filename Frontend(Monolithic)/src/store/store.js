import {
  configureStore
} from "@reduxjs/toolkit"

import cartReducer
  from "../features/cartSlice"

// =========================
// LOAD CART FROM STORAGE
// =========================

const loadCart = () => {

  try {

    const data =
      localStorage.getItem("cart")

    return data
      ? JSON.parse(data)
      : undefined

  } catch {

    return undefined
  }
}

// =========================
// SAVE CART TO STORAGE
// =========================

const saveCart = (state) => {

  try {

    localStorage.setItem(
      "cart",
      JSON.stringify(state.cart)
    )

  } catch (error) {

    console.log(error)
  }
}

export const store =
  configureStore({

    reducer: {

      cart: cartReducer,
    },

    preloadedState: {

      cart: loadCart()
    }
})

// =========================
// SUBSCRIBE STORE
// =========================

store.subscribe(() => {

  saveCart(store.getState())
})