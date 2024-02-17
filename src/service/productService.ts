import { API_BASE_URL } from "../constants";
import { ProductsResponse } from "../types";
import { delay } from "../utils";

export const getProducts = async (
  skip: number,
  limit: number
): Promise<ProductsResponse> => {
  const response = await fetch(`${API_BASE_URL}?skip=${skip}&limit=${limit}`);
  if (!response.ok) throw new Error("Could not get the products");

  await delay(500);
  return response.json() as Promise<ProductsResponse>;
};
