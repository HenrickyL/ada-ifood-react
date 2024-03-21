import { ReactNode } from "react"
import { NotificationActionsSty } from "./style"

interface NotificationActionsProps{
    children: ReactNode
}

export const NotificationActions = ({children}:NotificationActionsProps)=>{
    return(
        <NotificationActionsSty>
            {children}
        </NotificationActionsSty>
    )
}