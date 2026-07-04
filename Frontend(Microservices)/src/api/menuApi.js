import api from "./axiosConfig";

const MENU_URL =
    "http://localhost:8084/api/menu";

export const getRestaurantMenu = async (restaurantId) => {

    const response =
        await api.get(
            `${MENU_URL}/restaurant/${restaurantId}`
        );

    return response.data;
};

export const getMenuItem = async (id) => {

    const response =
        await api.get(
            `${MENU_URL}/${id}`
        );

    return response.data;
};

export const createMenuItem = async (menu) => {

    const response =
        await api.post(
            MENU_URL,
            menu
        );

    return response.data;
};

export const updateMenuItem = async (id, menu) => {

    const response =
        await api.put(
            `${MENU_URL}/${id}`,
            menu
        );

    return response.data;
};

export const deleteMenuItem = async (id) => {

    const response =
        await api.delete(
            `${MENU_URL}/${id}`
        );

    return response.data;
};