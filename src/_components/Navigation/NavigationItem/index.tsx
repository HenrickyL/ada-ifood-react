import { NavLinkProps } from "react-router-dom"
import { NavigationItemSty } from "./style"
import { ReactNode } from "react"

interface NavigationItemProps extends NavLinkProps{
    children?: ReactNode
    text?: string
    type?: 'default' | 'primary'
}

export const NavigationItem = (props: NavigationItemProps)=>{
    return(
        <NavigationItemSty type={props.type} to={props.to}>
            {props.children ? props.children : props.text}
        </NavigationItemSty>
    )
}