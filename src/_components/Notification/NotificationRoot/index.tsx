import { ReactNode } from "react"
import { NotificationRootSty } from "./style"
import { NotificationTypes } from "../../../_interfaces/notification"

interface NotificationRootProps{
    children: ReactNode
    type?: NotificationTypes
}

export const NotificationRoot = ({children, type}:NotificationRootProps)=>{
    return(
        <NotificationRootSty type={type || 'report'}>
            {children}
        </NotificationRootSty>
    )
}