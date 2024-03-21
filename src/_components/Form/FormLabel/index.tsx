import { FormLabelSty } from "./style"


interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
    text: string
    htmlFor: string
}

export const FormLabel = ({htmlFor, ...props}: FormLabelProps)=>{
    return (
        <FormLabelSty htmlFor={htmlFor} {...props}>
            {props.text}
        </FormLabelSty>
    )
}