import { IconType } from "react-icons"
import { Icon } from "../../Icon"
import { NotificationActionSty } from "./style"

interface NotificationAction{
    onClick: (rest:any)=>void
    icon: IconType
    type?: 'primary' | 'secondary'
}

export const NotificationAction = (props: NotificationAction)=>{
    return(
        <NotificationActionSty type={ props.type || 'primary'} onClick={props.onClick}>
            <Icon icon={props.icon} />
        </NotificationActionSty>
    )
}