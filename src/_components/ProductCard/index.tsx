import { IProduct } from "../../_interfaces/product"

interface ProductCardProps{
    product: IProduct
}
export const ProductCard = ({product}: ProductCardProps)=>{
    return(
        <span>{product.name}</span>
    )
}