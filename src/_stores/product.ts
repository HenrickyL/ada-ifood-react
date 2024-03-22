//example - use instead of useContext
import { create } from 'zustand';
import { IProduct } from '../_interfaces/product';

interface ProductStoreProps {
    cart: IProduct[]
    products: IProduct[]
    addToCart: (productID: string)=>void
    setProducts: (products: IProduct[])=>void
}

export const useProductStore = create<ProductStoreProps>((set) => ({
    cart: [],
    products: [],
    addToCart: (productID: string) =>{
        set((prev) => {
            const product = prev.products.find(x=>x.id === productID)
            return product ? {cart: [product,...prev.cart]}: {cart: prev.cart}
        })
    },
    setProducts: (products: IProduct[])=>{
        set(() => {
            return {products: products}
        })
    }
}));