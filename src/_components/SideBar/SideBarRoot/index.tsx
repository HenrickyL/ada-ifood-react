import { ReactNode } from "react"
import { SideBarRootSty } from "./style"

interface SideBarRootProps{
    children: ReactNode
}

export const SideBarRoot = ({children}:SideBarRootProps)=>{
    return(
        <SideBarRootSty>
            {children}
        </SideBarRootSty>
    )
}