import { Icon } from "../Icon"
import { CartButtonSty } from "./style"
import { FaShoppingCart as CartIcon } from "react-icons/fa";
interface CartButtonProps{
    value: number
}
export const CartButton = ({value}: CartButtonProps)=>{
    return (
        <CartButtonSty >
            <Icon  icon={CartIcon} size={24}/>
            {value > 0  &&<span>{value}</span>}
        </CartButtonSty>
    )
}