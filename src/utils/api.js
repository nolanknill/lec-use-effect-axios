const API_KEY = "grogu";
const API_KEY_STRING = "?api_key=" + API_KEY; 
const API_URL = "https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1";

export const getProductsEndpoint = `${API_URL}/products?${API_KEY_STRING}`;
export const getProductEndpoint = (id) => `${API_URL}/products/${id}?${API_KEY_STRING}`
export const postProductEndpoint = getProductsEndpoint;