import { useField } from "formik";
import { InputSty } from "./style"

interface InputInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    name: string
}

export const InputInput = ({...rest}: InputInputProps)=>{
    const {name} = rest
    const [field, meta] = useField({ name });
    const error = meta.touched && meta.error;

    return (
        <InputSty>
            <input type="text" {...field} {...rest}/>
            <span>{error}</span>
        </InputSty>
    )
}