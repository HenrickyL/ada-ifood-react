import { Input } from ".."
import { InputPasswordInputSty, InputPasswordSty } from "./style"
import { 
    IoMdEye as EyeIcon,
    IoMdEyeOff as EyeOffIcon,
    IoMdUnlock as PasswordOffIcon,
    IoMdLock as PasswordIcon} from "react-icons/io";
import { useState } from "react";
import { useTheme } from "../../../_hooks/theme";


interface InputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement>{
    iconSize?: number
    name?: string
}

export const InputPassword = ({iconSize, name, ...rest}:InputPasswordProps)=>{
    const [isPassword, setIsPassword] = useState<boolean>(true)
    const {theme} = useTheme()
    const iconThemeSize = theme.settings.iconSize

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        setIsPassword(!isPassword)
    }

    return (
        <InputPasswordSty>  
            <div>
            <Input.Icon icon={isPassword ? PasswordIcon : PasswordOffIcon} size={iconSize || iconThemeSize}/>
            <InputPasswordInputSty name={name || 'password'} {...rest} type={isPassword ? 'password' : 'text'} />
            </div>
            <button onClick={handleClick}>
                {isPassword ? <EyeIcon size={iconSize || iconThemeSize}/> : <EyeOffIcon  size={iconSize || iconThemeSize}/>}
            </button>
        </InputPasswordSty>
    )
}