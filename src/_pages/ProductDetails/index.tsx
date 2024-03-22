import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from "../../_network/api/products";
import { useNotificationStore } from "../../_stores/notification";
import { IoIosAlert as AlertIcon } from "react-icons/io";
import { ProductDetailsSty, ProductDetailsStyContainer} from "./style";
import { ProductCardField, ProductCardFieldInfo, ProductCardInterest, ProductCardOldPrice, ProductCardPrice, ProductCardTitle } from "../../_components/ProductCard/style";
import { getStringToNumber } from "../../_middlewares/NumberMiddleware";
import { useEffect } from "react";

export const ProductDetails = ()=>{
    const { productId } = useParams();
    const {addNotification } = useNotificationStore()
    const navigation = useNavigate()
    
    const { data: product} = useQuery({
        queryKey: [`products/${productId}`],
        queryFn: () => {
            if(productId)
                return findProductById(productId)
            else{
                addNotification({
                    icon: AlertIcon,
                    message: "Produto inválido. Tente novamente",
                    type: 'error'
                })
                navigation('./products')
            }
        },
    }); 

    return(
        <ProductDetailsSty>
            <img src={product?.image} alt={product?.name} />
            <ProductDetailsStyContainer>
                    <ProductCardTitle>{product?.name}</ProductCardTitle>
                    <ProductCardFieldInfo>
                        {product?.discount ? 
                            <ProductCardField>
                                <ProductCardOldPrice>R$ {product?.price}</ProductCardOldPrice>
                                <ProductCardPrice>R$ {getStringToNumber(product?.price*(1-product?.discount))}</ProductCardPrice>
                            </ProductCardField>: 
                            <ProductCardPrice>R$ {product?.price}</ProductCardPrice>
                        }
                        {product?.installmentQuantity && 
                            <ProductCardInterest>ou {product?.installmentQuantity}x de R$ {getStringToNumber(product.price*(1-(product?.discount || 0))/product.installmentQuantity)} sem juros</ProductCardInterest>
                        }
                    </ProductCardFieldInfo>
            </ProductDetailsStyContainer>
        </ProductDetailsSty>
    )
}