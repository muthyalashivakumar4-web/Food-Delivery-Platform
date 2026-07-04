import api from "./axiosConfig";

const RESTAURANT_URL =
    "http://localhost:8083/api/restaurants";

export const getAllRestaurants = async () => {
    const response = await api.get(RESTAURANT_URL);
    return response.data;
};

export const getRestaurantById = async (id) => {
    const response = await api.get(
        `${RESTAURANT_URL}/${id}`
    );
    return response.data;
};

export const getRestaurantByOwner = async (ownerId) => {
    const response = await api.get(
        `${RESTAURANT_URL}/owner/${ownerId}`
    );
    return response.data;
};

export const createRestaurant = async (restaurant) => {
    const response = await api.post(
        RESTAURANT_URL,
        restaurant
    );
    return response.data;
};

export const updateRestaurant = async (
    id,
    restaurant
) => {
    const response = await api.put(
        `${RESTAURANT_URL}/${id}`,
        restaurant
    );
    return response.data;
};

export const deleteRestaurant = async (id) => {
    const response = await api.delete(
        `${RESTAURANT_URL}/${id}`
    );
    return response.data;
};

export const getRestaurantsByOwner = async (ownerId) => {
  const response = await api.get(
    `${RESTAURANT_URL}/owner/${ownerId}`
  );

  return response.data;
};