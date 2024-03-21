import { ReactNode } from "react"
import { ListSty } from "./style"

interface ListProps{
    children: ReactNode
    isHorizontal?: boolean
}
export const List = (props:ListProps)=>{
    return(
        <ListSty 
            isHorizontal={props.isHorizontal}>
            {props.children}
        </ListSty>
    )
}