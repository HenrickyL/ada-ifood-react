import { useEffect, useState } from "react";
import { ProductCard } from "../../_components/ProductCard"
import { useProductStore } from "../../_stores/product"
import { ProductListPaginationContainer, ProductListSty, ProductListButton } from "./style"
import { useQuery } from '@tanstack/react-query';
import { PaginationData } from "../../_interfaces/pagination";
import { listProducts } from "../../_network/api/products";
import { Link } from "react-router-dom";

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
          setProducts(productsData);
        }
      }, [productsData, isLoading, setProducts]);

    return(
        <ProductListSty>
            <main>
                {products.data.map(p=>
                    <ProductCard to={p.id} key={p.id}product={p} />
                )}
            </main>
            <ProductListPaginationContainer>
                {[...Array(products?.last).keys()].map((x) => {
                    const page = x + (products?.first ?? 1);

                    return (
                        <ProductListButton
                            key={page}
                            type={page == (products.prev||0)+1 ? 'active': 'default'}
                            onClick={() => {
                                setPaginationData((prev) => ({
                                    ...prev,
                                    page
                                }));
                            }}
                        >
                            {page}
                        </ProductListButton>
                    );
                })}
            </ProductListPaginationContainer>
        </ProductListSty>
    )
}