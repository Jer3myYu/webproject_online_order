import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${BASE_URL}/login?username=${credentials.email}&password=${credentials.password}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Error logging in: ${error.response.status} ${error.response.statusText}`);
            throw new Error(`Error logging in: ${error.response.statusText}`);
        } else if (error.request) {
            console.error('No response received while logging in:', error.request);
            throw new Error('No response received while logging in');
        } else {
            console.error('Error setting up login request:', error.message);
            throw new Error(`Error logging in: ${error.message}`);
        }
    }
};

export const signup = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/signup`, 
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Error signing up: ${error.response.status} ${error.response.statusText}`);
            throw new Error(`Error signing up: ${error.response.statusText}`);
        } else if (error.request) {
            console.error('No response received while signing up:', error.request);
            throw new Error('No response received while signing up');
        } else {
            console.error('Error setting up signup request:', error.message);
            throw new Error(`Error signing up: ${error.message}`);
        }
    }
}

export const getMenus = async (restId) => {
    try {
        const response = await axios.get(`${BASE_URL}/restaurant/${restId}/menu`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Error getting menus: ${error.response.status} ${error.response.statusText}`);
            throw new Error(`Error getting menus: ${error.response.statusText}`);
        } else if (error.request) {
            console.error('No response received while getting menus:', error.request);
            throw new Error('No response received while getting menus');
        } else {
            console.error('Error setting up get menus request:', error.message);
            throw new Error(`Error getting menus: ${error.message}`);
        }
    }
}

export const getRestaurants = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/restaurants/menu`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Error getting restaurants: ${error.response.status} ${error.response.statusText}`);
            throw new Error(`Error getting restaurants: ${error.response.statusText}`);
        } else if (error.request) {
            console.error('No response received while getting restaurants:', error.request);
            throw new Error('No response received while getting restaurants');
        } else {
            console.error('Error setting up get restaurants request:', error.message);
            throw new Error(`Error getting restaurants: ${error.message}`);
        }
    }
}

export const checkout = async () => {
    try {
        const response = await axios.post(`${BASE_URL}/cart/checkout`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Error checking out: ${error.response.status} ${error.response.statusText}`);
            throw new Error(`Error checking out: ${error.response.statusText}`);
        } else if (error.request) {
            console.error('No response received while checking out:', error.request);
            throw new Error('No response received while checking out');
        } else {
            console.error('Error setting up checkout request:', error.message);
            throw new Error(`Error checking out: ${error.message}`);
        }
    }
}

export const addItemToCart = async (itemId) => {
    try {
        const response = await axios.post(`${BASE_URL}/cart`, 
            {
                params: {menu_id: itemId},
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(`Error adding item to cart: ${error.response.status} ${error.response.statusText}`);
            throw new Error(`Error adding item to cart: ${error.response.statusText}`);
        } else if (error.request) {
            console.error('No response received while adding item to cart:', error.request);
            throw new Error('No response received while adding item to cart');
        } else {
            console.error('Error setting up add item to cart request:', error.message);
            throw new Error(`Error adding item to cart: ${error.message}`);
        }
    }
}