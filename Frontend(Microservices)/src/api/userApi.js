import api from "./axiosConfig";

const USER_URL =
    "http://localhost:8082/api/users";

export const getAllUsers = async () => {

    const response =
        await api.get(USER_URL);

    return response.data;
};

export const getUserById = async (id) => {

    const response =
        await api.get(
            `${USER_URL}/${id}`
        );

    return response.data;
};

export const updateUser = async (id, user) => {

    const response =
        await api.put(
            `${USER_URL}/${id}`,
            user
        );

    return response.data;
};

export const deleteUser = async (id) => {

    const response =
        await api.delete(
            `${USER_URL}/${id}`
        );

    return response.data;
};