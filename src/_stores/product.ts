//example - use instead of useContext
import { create } from 'zustand';
import { IProduct } from '../_interfaces/product';
import { PaginationResponse } from '../_interfaces/pagination';

export interface CartProduct{
    product: IProduct
    qtd: number
}

interface ProductStoreProps {
    cart: CartProduct[]
    products: PaginationResponse<IProduct>
    addToCart: (productID: string)=>void
    setProducts: (products: PaginationResponse<IProduct>)=>void
    editValueToCart:(productID: string, value: number)=>void
    clearCart: ()=>void

}

export const useProductStore = create<ProductStoreProps>((set) => ({
    cart: [],
    products: { data: [] } as unknown as PaginationResponse<IProduct>,
    addToCart: (productID: string) =>{
        set((prev) => {
            const product = prev.products.data.find(x=>x.id === productID)
            return product && !prev.cart.some(x=>x.product.id === productID) ? {cart: [{product, qtd: 1},...prev.cart]}: {cart: prev.cart}
        })
    },
    setProducts: (products: PaginationResponse<IProduct>)=>{
        set(() => {
            return {products: products}
        })
    },
    editValueToCart: (productID: string, value: number)=>{
        set((prev) => {
            const updatedCart = prev.cart.map((item) => {
              if (item.product.id === productID) {
                return { ...item, qtd: value }; // Atualiza a quantidade do produto
              }
              return item;
            });
            return { cart: updatedCart };
          });
    },
    clearCart: ()=>{
        set(() => {
            return {cart: []}
        })
    }
}));