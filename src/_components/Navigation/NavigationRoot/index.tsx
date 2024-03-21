import { ReactNode } from "react"
import { NavigateRootSty } from "./style"
interface NavigationRootProps{
    children: ReactNode
}
export const NavigationRoot = ({children} : NavigationRootProps)=>{
    return(
        <NavigateRootSty>
            {children}
        </NavigateRootSty>
    )
}