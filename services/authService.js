import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://belakoo-backend.onrender.com"; // Replace with your actual backend URL

const authService = {
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/user/login/`, {
      email,
      password,
    });
    if (response.data.access) {
      await AsyncStorage.setItem("userToken", response.data.access);
      await AsyncStorage.setItem("refreshToken", response.data.refresh);
    }
    return response.data;
  },

  logout: async () => {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("refreshToken");
  },

  refreshToken: async () => {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    if (refreshToken) {
      const response = await axios.post(`${API_URL}/user/token/refresh/`, {
        refresh: refreshToken,
      });
      if (response.data.access) {
        await AsyncStorage.setItem("userToken", response.data.access);
      }
      return response.data;
    }
    throw new Error("No refresh token found");
  },

  getToken: async () => {
    return await AsyncStorage.getItem("userToken");
  },
};

export default authService;