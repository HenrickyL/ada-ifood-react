import { ReactNode } from "react"
import { SideBarFieldSty } from "./style"

interface SideBarFieldProps{
    children: ReactNode
}

export const SideBarField = ({children}: SideBarFieldProps)=>{
    return(
        <SideBarFieldSty>
            {children}
        </SideBarFieldSty>
    )
}