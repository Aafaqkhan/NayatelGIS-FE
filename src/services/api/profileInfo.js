import axios from "axios";

const API_BASE_URL = "https://gisbedev.nayatel.com/account/";

const profileApi = {
  getProfileInfo: async (id, token) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${API_BASE_URL}profile-info/${id}`, {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      });

      console.log("user infoo :: ", response.data);

      return response.data;
    } catch (error) {
      console.log("user infoo 33");

      throw (
        error.response?.data || "An error occurred while fetching profile info."
      );
    }
  },
};

export default profileApi;
