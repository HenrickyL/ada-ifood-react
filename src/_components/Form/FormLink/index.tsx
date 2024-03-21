import { FormLinkSty } from "./style"


interface FormLinkProp{
    text: string
    to: string
}
export const FormLink = ({text, to}: FormLinkProp)=>{

    return(
        <FormLinkSty to={to}>
            {text}
        </FormLinkSty>
    )
}