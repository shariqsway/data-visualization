import { ProductsResponse } from "../types";

const PRODUCTS_API_URL = "https://dummyjson.com/products";

export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await fetch(PRODUCTS_API_URL);
  if (!response.ok) throw new Error("Could not get the products");
  return response.json() as Promise<ProductsResponse>;
};
