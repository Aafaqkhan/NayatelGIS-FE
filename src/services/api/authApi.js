import axios from "axios";

const API_BASE_URL = "https://gisbedev.nayatel.com/account/";

const authApi = {
  login: async (userName, password) => {
    event.preventDefault();
    console.log("aaa");

    try {
      const response = await axios.post(`${API_BASE_URL}login/`, {
        username: userName,
        password: password,
      });

      console.log("res status ::", response.status);

      return response;
    } catch (error) {
      throw error.response?.data || "An error occurred while logging in.";
    }
  },
};

export default authApi;
