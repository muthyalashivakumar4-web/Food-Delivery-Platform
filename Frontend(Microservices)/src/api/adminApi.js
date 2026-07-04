import axios from "axios";

const USER_URL = "http://localhost:8082/api/users";
const RESTAURANT_URL = "http://localhost:8083/api/restaurants";

const ADMIN_URL = "http://localhost:8080/api/admin";

export const getAdminStats = async () => {
    const response = await axios.get(`${ADMIN_URL}/stats`);
    return response.data;
};

// USERS
export const getAllUsers = async () => {
    const response = await axios.get(USER_URL);
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await axios.delete(`${USER_URL}/${id}`);
    return response.data;
};

// RESTAURANTS
export const getAllRestaurants = async () => {
    const response = await axios.get(RESTAURANT_URL);
    return response.data;
};

export const deleteRestaurant = async (id) => {
    const response = await axios.delete(`${RESTAURANT_URL}/${id}`);
    return response.data;
};