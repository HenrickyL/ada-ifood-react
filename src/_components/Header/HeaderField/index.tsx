import { ReactNode } from "react"
import { HeaderFieldSty } from "./style"

interface HeaderFieldProps{
    children?: ReactNode
}

export const HeaderField = ({children}:HeaderFieldProps)=>{
    return(
        <HeaderFieldSty>
            {children}
        </HeaderFieldSty>
    )
}