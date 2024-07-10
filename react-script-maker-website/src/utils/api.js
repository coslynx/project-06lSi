import axios from 'axios';

const BASE_URL = 'https://api.github.com';

const api = {
  fetchScripts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/scripts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching scripts:', error);
      return [];
    }
  },

  searchScripts: async (keywords) => {
    try {
      const response = await axios.get(`${BASE_URL}/scripts/search?keywords=${keywords}`);
      return response.data;
    } catch (error) {
      console.error('Error searching scripts:', error);
      return [];
    }
  },

  fetchScriptDetails: async (scriptId) => {
    try {
      const response = await axios.get(`${BASE_URL}/scripts/${scriptId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching script details:', error);
      return null;
    }
  },

  purchaseScript: async (scriptId) => {
    try {
      const response = await axios.post(`${BASE_URL}/scripts/${scriptId}/purchase`);
      return response.data;
    } catch (error) {
      console.error('Error purchasing script:', error);
      return null;
    }
  },

  fetchUserPurchases: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/purchases`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user purchases:', error);
      return [];
    }
  },

  postRatingAndReview: async (scriptId, rating, review) => {
    try {
      const response = await axios.post(`${BASE_URL}/scripts/${scriptId}/rating`, { rating, review });
      return response.data;
    } catch (error) {
      console.error('Error posting rating and review:', error);
      return null;
    }
  }
};

export default api;