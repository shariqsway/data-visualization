import { ProductsResponse } from "../types";
import { delay } from "../utils";

const PRODUCTS_API_URL = "https://dummyjson.com/products";

export const getProducts = async (
  skip: number,
  limit: number
): Promise<ProductsResponse> => {
  const response = await fetch(
    `${PRODUCTS_API_URL}?skip=${skip}&limit=${limit}`
  );
  if (!response.ok) throw new Error("Could not get the products");

  await delay(500);
  return response.json() as Promise<ProductsResponse>;
};
