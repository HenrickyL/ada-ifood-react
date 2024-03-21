import { ReactNode } from "react"
import { InputRootSty } from "./style"

interface InputRoot{
    children: ReactNode
}

export const InputRoot = ({children}:InputRoot)=>{
    return (
        <InputRootSty>
            {children}
        </InputRootSty>
    )
}