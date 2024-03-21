import { NotificationContentSty } from "./style"


interface NotificationContentProps{
    text: string
}

export const NotificationContent = ({text}: NotificationContentProps)=>{
    return(
        <NotificationContentSty>
            {text}
        </NotificationContentSty>
    )
}