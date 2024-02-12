export interface Product {
  id: number;
  title: string;
  brand: string;
  discountPercentage: number;
  price: number;
}

export interface ProductsResponse {
  products: Product[];
}
