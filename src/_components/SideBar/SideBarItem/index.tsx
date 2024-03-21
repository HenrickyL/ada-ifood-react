import { NavLinkProps } from "react-router-dom"
import { SideBarItemSty } from "./style"
import { IconType } from "react-icons"
import { SideBarIcon } from "../SideBarIcon"
import { SideBarLabel } from "../SideBarLabel"

interface SideBarItemProp extends NavLinkProps{
    icon: IconType
    text: string
}

export const SideBarItem = (props: SideBarItemProp)=>{
    return(
        <SideBarItemSty to={props.to}>
            <SideBarIcon icon={props.icon}/>
            <SideBarLabel text={props.text}/> 
        </SideBarItemSty>
    )
}