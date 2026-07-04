import api from "./axiosConfig";

const ORDER_URL =
    "http://localhost:8086/api/orders";

export const placeOrder = async (order) => {

    const response =
        await api.post(
            ORDER_URL,
            order
        );

    return response.data;
};

export const getOrder = async (id) => {

    const response =
        await api.get(
            `${ORDER_URL}/${id}`
        );

    return response.data;
};

export const getUserOrders = async (userId) => {

    const response =
        await api.get(
            `${ORDER_URL}/user/${userId}`
        );

    return response.data;
};

export const getRestaurantOrders = async (restaurantId) => {

    const response =
        await api.get(
            `${ORDER_URL}/restaurant/${restaurantId}`
        );

    return response.data;
};

export const getAllOrders = async () => {

    const response =
        await api.get(ORDER_URL);

    return response.data;
};

export const updateOrderStatus = async (orderId, status) => {

    const response =
        await api.put(
            `${ORDER_URL}/${orderId}/status?status=${status}`
        );

    return response.data;
};