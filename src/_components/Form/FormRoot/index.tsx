import { ReactNode } from "react"
import { FormRootSty } from "./style"
import { FormikContextType, 
    FormikProvider } from "formik";

interface FormRootProps{
    children: ReactNode
    form: FormikContextType<any>
}

export const FormRoot = ({children, form, ...props}: FormRootProps)=>{
    return(
        <FormRootSty  {...props}>
            <FormikProvider value={form}>
                {children}
            </FormikProvider>
        </FormRootSty>
    )
    
}