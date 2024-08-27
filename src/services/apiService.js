import axios from 'axios';

const API_BASE_URL = 'https://localhost:7013/api';

export const getEmployees = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/employees`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

export const searchEmployees = async (params) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/employees/search`, { params });
        return response.data;
    } catch (error) {
        console.error('Error searching employees:', error);
        throw error;
    }
};
