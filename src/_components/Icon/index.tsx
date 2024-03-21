import { IconType } from "react-icons";
import { FaQuestion as Question } from "react-icons/fa6";

interface IconProps{
    icon?: IconType
    size?: number
}

export const Icon = ({icon, size }: IconProps)=>{
    const IconComponent: IconType = icon || Question;
    return (
        <IconComponent size={size}/>
    )
}