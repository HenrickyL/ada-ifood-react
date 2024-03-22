import { useEffect, useState } from "react";
import { ProductCard } from "../../_components/ProductCard"
import { useProductStore } from "../../_stores/product"
import { ProductListSty } from "./style"
import { useQuery } from '@tanstack/react-query';
import { PaginationData } from "../../_interfaces/pagination";
import { listProducts } from "../../_network/api/products";

export const ProductList = ()=>{
    const [paginationData, setPaginationData] = useState<PaginationData>({
        page: 1,
        perPage: 8
    });
    const {products, setProducts} = useProductStore()
    
    const { data: productsData, isLoading } = useQuery({
        queryKey: ['products', paginationData],
        queryFn: () => listProducts(paginationData),
    });

    useEffect(() => {
        if (!isLoading && productsData) {
          setProducts(productsData.data);
        }
      }, [productsData, isLoading, setProducts]);

    return(
        <ProductListSty>
            <main>
                {products.map(p=>
                    <ProductCard key={p.id}product={p} />
                )}
            </main>
        </ProductListSty>
    )
}