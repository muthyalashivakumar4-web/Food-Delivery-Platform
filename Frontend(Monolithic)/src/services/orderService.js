import api from "../api/axios"

export const placeOrder =
  async (payload) => {

    const response =
      await api.post(
        "/orders",
        payload
      )

    return response.data
}

export const getMyOrders =
  async () => {

    const response =
      await api.get(
        "/orders/my"
      )

    return response.data
}