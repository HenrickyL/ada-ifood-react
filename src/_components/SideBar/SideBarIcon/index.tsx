import { IconType } from "react-icons"
import { SideBarIconSty } from "./style"
import { Icon } from "../../Icon"

interface SideBarIconProps{
    size?: number
    icon: IconType
}

export const SideBarIcon = ({icon, size}: SideBarIconProps)=>{
    return(
        <SideBarIconSty >
            <Icon icon={icon} size={size}/>
        </SideBarIconSty>
    )
}