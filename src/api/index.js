/* eslint-disable no-useless-catch */
import axios from "axios";

const API_BASE_URL = "https://sweede.app/DeliveryBoy";

export const fetchEmployeeData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Get-Employee`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postEmployee = async (details) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/Add-Employee`,
            details
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateEmployee = async (details) => {
    try {
        const response = await axios.patch(
            `${API_BASE_URL}/update-Employee/${details.id}`,
            details
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteEmployee = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/delete-Employee/${id}`);
    } catch (error) {
        throw error;
    }
};
