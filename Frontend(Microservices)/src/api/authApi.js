import api from "./axiosConfig";

const AUTH_URL =
    "http://localhost:8081/api/auth";

// Register User
export const registerUser =
    async (user) => {

        const response =
            await api.post(
                `${AUTH_URL}/register`,
                user
            );

        return response.data;
    };

// Login User
export const loginUser =
    async (credentials) => {

        const response =
            await api.post(
                `${AUTH_URL}/login`,
                credentials
            );

        return response.data;
    };