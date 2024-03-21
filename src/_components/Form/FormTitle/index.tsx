import { ReactNode } from "react"
import { FormTitleSty } from "./style"

interface FromTitleProps {
    children?: ReactNode
    text?: string
}
export const FormTitle = ({children, text}: FromTitleProps)=>{
    return (
        <FormTitleSty>
            {children ? 
                children:
                <h2>{text || ""}</h2>
            }
        </FormTitleSty>
    )
}