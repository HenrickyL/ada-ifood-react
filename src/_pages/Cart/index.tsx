import { useEffect, useState } from "react"
import { getStringToNumber } from "../../_middlewares/NumberMiddleware"
import { CartProduct, useProductStore } from "../../_stores/product"
import { CartProductContainer, CartProductItem, CartSty, CartValues } from "./style"
import { useNavigate } from "react-router-dom"

export const Cart = ()=>{
    const{cart, clearCart} = useProductStore()
    const navigate =useNavigate()
    return(
        <CartSty>
            <CartProductContainer>
                <tbody>
                    {cart.map(item=>
                        <Item key={item.product.id} cartItem={item}/>
                    )}
                </tbody>
            </CartProductContainer>
            <CartValues>
                <h3>Resumo da Compra</h3>
                <div>
                    <span>Produtos:</span>
                    <span>R$ {getStringToNumber(cart.reduce((sum, {product:{price, discount}, qtd})=> sum+ qtd * price * (1-(discount|| 0))  , 0))}</span>
                </div>
                <div>
                    <span>Frete:</span>
                    <span>R$ 20.00</span>
                </div>
                <button onClick={()=>{
                    clearCart()
                    navigate('/')
                }}>Fechar Pedido</button>

            </CartValues>
        </CartSty>
    )
}

interface ItemProp{
    cartItem: CartProduct
}

const Item = ({cartItem:{product, qtd}}:ItemProp)=>{
    const [count, setCount] = useState<number>(qtd)
    const {editValueToCart} = useProductStore()
    useEffect(()=>{
        editValueToCart(product.id, count)
    }, [count])
    return(
        <CartProductItem>
            <td><img src={product.image} alt={product.name} /></td>
            <td>{product.name}</td>
            <td>{ getStringToNumber( product.price * (1 - (product.discount || 0)))}</td>
            <td>
                <button onClick={()=>setCount((prev)=> prev+1 )}>+</button>
                <span>{count}</span>
                <button onClick={()=>setCount((prev)=> prev-1 < 1 ? prev : prev -1)}>-</button>
            </td>
        </CartProductItem>
    )
}