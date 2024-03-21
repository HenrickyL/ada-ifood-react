import { InputLabelSty } from "./style"

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
    text: string
    htmlFor: string
}

export const InputLabel = ({text, htmlFor}: InputLabelProps)=>{
    return(
        <InputLabelSty htmlFor={htmlFor}>
            {text}
        </InputLabelSty>
    )
}