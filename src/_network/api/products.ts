import { PaginationData, PaginationResponse } from "../../_interfaces/pagination";
import { client } from "../api";

export interface IReview {
    id: string;
    name: string;
    comment: string;
    rating: number;
  }
  
  export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    stock: number;
    rating: number;
    reviews: IReview[];
  }
  
  const productPath = 'products';
  
  export async function listProducts(pagination?: PaginationData) {
    await new Promise((res) => setTimeout(res, 1000));
  
    let requestPath = productPath;
  
    if (pagination) {
      const { page, perPage } = pagination;
      requestPath = `${requestPath}?_page=${page}&_per_page=${perPage}`;
    }
  
    const { data } = await client.get<PaginationResponse<IProduct>>(requestPath);
    return data;
  }
  
  export async function findProductById(id: string): Promise<IProduct> {
    const { data } = await client.get<IProduct>(`${productPath}/${id}`);
    return data;
  }
  
  export async function createProduct(product: IProduct): Promise<void> {
    await client.post(`${productPath}`, product);
  }
  
  export async function updateProduct(id: string, product: IProduct): Promise<void> {
    await client.put(`${productPath}/${id}`, product);
  }
  
  export async function removeProduct(id: string): Promise<void> {
    await client.delete(`${productPath}/${id}`);
  }
  