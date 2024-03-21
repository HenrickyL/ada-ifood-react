import { ReactNode } from "react"
import { HeaderLogoSty } from "./style"

interface HeaderLogoProps{
    src?: string
    children?: ReactNode
}

export const HeaderLogo = ({src, children}: HeaderLogoProps)=>{
    return (
        <HeaderLogoSty>
            {src &&  <img src={src} alt="logo" />}
            {children}
        </HeaderLogoSty>
    )
}