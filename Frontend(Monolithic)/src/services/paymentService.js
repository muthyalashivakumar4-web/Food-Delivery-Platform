import api from "../api/axios"

// =========================
// CREATE PAYMENT ORDER
// =========================

export const createPaymentOrder =
  async (amount) => {

    const response =
      await api.post(
        "/payments/create-order",
        {
          amount
        }
      )

    return response.data
}

// =========================
// VERIFY PAYMENT
// =========================

export const verifyPayment =
  async (payload) => {

    const response =
      await api.post(
        "/payments/verify",
        payload
      )

    return response.data
}