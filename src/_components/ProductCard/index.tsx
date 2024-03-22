import { IProduct } from "../../_interfaces/product"
import { useProductStore } from "../../_stores/product";
import { Icon } from "../Icon";
import { ProductCardCart, ProductCardField, ProductCardFieldInfo, ProductCardInterest, ProductCardOldPrice, ProductCardPrice, ProductCardSty, ProductCardTitle } from "./style"
import { FaCartPlus as CartIcon} from "react-icons/fa";
interface ProductCardProps{
    product: IProduct
}


function getStringToNumber(value: number): string{
    return value.toFixed(2)
}
export const ProductCard = ({product}: ProductCardProps)=>{
    const {addToCart} = useProductStore()
    return(
        <ProductCardSty>
            <img src={product.image} alt={`${product.name}`}/>
            <div>
                <ProductCardTitle>{product.name}</ProductCardTitle>
                <ProductCardFieldInfo>
                    {product.discount ? 
                        <ProductCardField>
                            <ProductCardOldPrice>R$ {product.price}</ProductCardOldPrice>
                            <ProductCardPrice>R$ {getStringToNumber(product.price*(1-product.discount))}</ProductCardPrice>
                        </ProductCardField>: 
                        <ProductCardPrice>R$ {product.price}</ProductCardPrice>
                    }
                    {product.installmentQuantity  && 
                        <ProductCardInterest>ou {product.installmentQuantity}x de R$ {getStringToNumber(product.price*(1+(product.interest || 0)))} {product.interest  && product.interest> 0 ? 'com':'sem'} juros</ProductCardInterest>
                    }
                    
                </ProductCardFieldInfo>
            </div>

            <ProductCardCart onClick={()=>addToCart(product.id)}>
                <Icon icon={CartIcon} />
            </ProductCardCart>
        </ProductCardSty>
    )
}