import axios from "axios";

const BaseUrl = "https://api.escuelajs.co/api/v1";

const blockedCategoryIds = [1,2,3,42,43,104,109,110,111,112,113,114,115,116];

export const getAllCategories = async () => {
  try {
    const { data } = await axios.get(`${BaseUrl}/categories`);
    const filtered = data.filter(cat => !blockedCategoryIds.includes(cat.id));
    return filtered;
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
};