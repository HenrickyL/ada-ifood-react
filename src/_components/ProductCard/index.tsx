import { IProduct } from "../../_interfaces/product"
import { getStringToNumber } from "../../_middlewares/NumberMiddleware";
import { useProductStore } from "../../_stores/product";
import { Icon } from "../Icon";
import { ProductCardCart, ProductCardField, ProductCardFieldInfo, ProductCardInterest, ProductCardOldPrice, ProductCardPrice, ProductCardRating, ProductCardSty, ProductCardTitle } from "./style"
import { FaCartPlus as CartIcon,
    FaStar as StarIcon} from "react-icons/fa";
interface ProductCardProps{
    product: IProduct
    to: string
}


export const ProductCard = ({product, to}: ProductCardProps)=>{
    const {addToCart} = useProductStore()
    return(
        <ProductCardSty to={to}>
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
                    {product.installmentQuantity && 
                        <ProductCardInterest>ou {product.installmentQuantity}x de R$ {getStringToNumber(product.price*(1-(product.discount || 0))/product.installmentQuantity)} sem juros</ProductCardInterest>
                    }
                </ProductCardFieldInfo>
            </div>

            <ProductCardCart onClick={()=>addToCart(product.id)}>
                <Icon icon={CartIcon} />
            </ProductCardCart>
            <ProductCardRating>
                {product.rating}
                <Icon icon={StarIcon}/>
            </ProductCardRating>
        </ProductCardSty>
    )
}