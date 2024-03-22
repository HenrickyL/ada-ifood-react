import { PaginationData, PaginationResponse } from "../../_interfaces/pagination";
import { IProduct } from "../../_interfaces/product";
import { client } from "../api";

  
  const productPath = 'products';
  export async function listProducts(pagination: PaginationData) : Promise<PaginationResponse<IProduct>> {
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
  