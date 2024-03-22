import { IconType } from "react-icons"
import { HeaderButtonSty } from "./style"
import { Icon } from "../../Icon"
interface HeaderButtonProps {
    onClick: React.MouseEventHandler<HTMLDivElement>
    icon?: IconType
    text?: string
    size?: number
    type?: 'default' | 'primary'

}
export const HeaderButton = ({onClick, icon, text, size, type}: HeaderButtonProps)=>{
    return (
        <HeaderButtonSty type={type} onClick={onClick}>
            {icon && <Icon size={size} icon={icon}/>}
            {text && <span>{text}</span>}
        </HeaderButtonSty>
    )
}