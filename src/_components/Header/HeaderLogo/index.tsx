import { ReactNode } from "react"
import { HeaderLogoSty } from "./style"
import { useNavigate } from "react-router-dom"

interface HeaderLogoProps{
    src?: string
    text?: string
    children?: ReactNode
}

export const HeaderLogo = ({src, children, text}: HeaderLogoProps)=>{
    const navigate = useNavigate()
    return (
        <HeaderLogoSty onClick={()=>navigate('/')}>
            {src ?  <img src={src} alt="logo" /> : text}
            {children}
        </HeaderLogoSty>
    )
}