import api from "../api/axios"

export const getFoodByRestaurant =
  async (restaurantId) => {

    const response = await api.get(
      `/food/restaurant/${restaurantId}`
    )

    return response.data
}