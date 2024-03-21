import { ReactNode } from "react"
import { FormFieldSty } from "./style"

interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement>{
    children: ReactNode
}

export const FormField = ({children}: FormFieldProps)=>{
    return (
        <FormFieldSty>
            {children}
        </FormFieldSty>
    )
}