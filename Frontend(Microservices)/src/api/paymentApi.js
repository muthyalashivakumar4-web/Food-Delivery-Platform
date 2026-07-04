import api from "./axiosConfig";

const PAYMENT_URL =
    "http://localhost:8087/api/payment";

export const makePayment = async (payment) => {

    const response =
        await api.post(
            PAYMENT_URL,
            payment
        );

    return response.data;
};

export const getPayment = async (id) => {

    const response =
        await api.get(
            `${PAYMENT_URL}/${id}`
        );

    return response.data;
};

export const getAllPayments = async () => {

    const response =
        await api.get(PAYMENT_URL);

    return response.data;
};