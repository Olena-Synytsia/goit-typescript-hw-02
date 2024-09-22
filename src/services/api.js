import axios from "axios";

const API_KEY = "_FUURRXxqX-ey0ranwlI68hD8fJRMTVuIJKd10tXH94";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query: query,
        page: page,
        per_page: 9,
        client_id: API_KEY,
      },
    });
    return response.data;
  } catch {
    throw new Error("Failed to fetch images");
  }
};
