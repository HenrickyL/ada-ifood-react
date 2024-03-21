import { IconType } from "react-icons"
import { Icon } from "../../Icon"
import { useTheme } from "../../../_hooks/theme"

interface NotificationIconProps{
    icon?: IconType
    size?: number
}

export const NotificationIcon = ({icon, size}:NotificationIconProps)=>{
    const {theme} = useTheme()
    return(
        <Icon icon={icon} size={size || theme.settings.iconSize}/>
    )
}