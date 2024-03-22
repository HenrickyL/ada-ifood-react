//example - use instead of useContext
import { create } from 'zustand';
import { IProduct } from '../_interfaces/product';
import { PaginationResponse } from '../_interfaces/pagination';

interface ProductStoreProps {
    cart: IProduct[]
    products: PaginationResponse<IProduct>
    addToCart: (productID: string)=>void
    setProducts: (products: PaginationResponse<IProduct>)=>void
}

export const useProductStore = create<ProductStoreProps>((set) => ({
    cart: [],
    products: { data: [] } as unknown as PaginationResponse<IProduct>,
    addToCart: (productID: string) =>{
        set((prev) => {
            const product = prev.products.data.find(x=>x.id === productID)
            return product && !prev.cart.some(x=>x.id === productID) ? {cart: [product,...prev.cart]}: {cart: prev.cart}
        })
    },
    setProducts: (products: PaginationResponse<IProduct>)=>{
        set((prev) => {
            return {products: products}
        })
    }
}));