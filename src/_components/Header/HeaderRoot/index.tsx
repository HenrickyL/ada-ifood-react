import { ReactNode } from "react"
import { HeaderRootSty } from "./style"

interface HeaderRootProps{
    children: ReactNode
}

export const HeaderRoot = ({children}: HeaderRootProps)=>{
    return(
        <HeaderRootSty>
            {children}
        </HeaderRootSty>
    )
}