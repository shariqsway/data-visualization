import { API_BASE_URL } from "../constants";
import { ProductsResponse } from "../types";
import { delay } from "../utils";

export const getProducts = async (
  skip: number,
  limit: number,
  searchQuery: string
): Promise<ProductsResponse> => {
  const url =
    searchQuery.trim().toLowerCase() !== ""
      ? `${API_BASE_URL}/search?q=${encodeURIComponent(
          searchQuery
        )}&skip=${skip}&limit=${limit}`
      : `${API_BASE_URL}?skip=${skip}&limit=${limit}`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Could not get the products");

  await delay(500);
  return response.json() as Promise<ProductsResponse>;
};
