import axios from "axios";
import { FetchImages } from "./api.types";

const API_KEY = "_FUURRXxqX-ey0ranwlI68hD8fJRMTVuIJKd10tXH94";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<FetchImages> => {
  try {
    const response = await axios.get<FetchImages>(BASE_URL, {
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
