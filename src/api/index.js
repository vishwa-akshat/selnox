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
