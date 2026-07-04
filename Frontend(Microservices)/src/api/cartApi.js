import api from "./axiosConfig";

const CART_URL =
    "http://localhost:8085/api/cart";

// Add item to cart
export const addToCart =
    async (request) => {

        const response =
            await api.post(
                CART_URL,
                request
            );

        return response.data;
    };

// Get cart items
export const getUserCart =
    async (userId) => {

        const response =
            await api.get(
                `${CART_URL}/${userId}`
            );

        return response.data;
    };

// Get total amount
export const getCartTotal =
    async (userId) => {

        const response =
            await api.get(
                `${CART_URL}/total/${userId}`
            );

        return response.data;
    };

// Remove cart item
export const removeCartItem =
    async (cartItemId) => {

        const response =
            await api.delete(
                `${CART_URL}/${cartItemId}`
            );

        return response.data;
    };