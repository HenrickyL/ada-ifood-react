import { IconType } from "react-icons"
import { InputButtonSty } from "./style"

interface InputButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text?: string
    icon?: IconType
}


export const InputButton = ({icon: Icon, text, ...props}: InputButtonProps)=>{
    return (
        <InputButtonSty {...props} >
            {Icon && <Icon />}
            {text}
        </InputButtonSty>
    )
}