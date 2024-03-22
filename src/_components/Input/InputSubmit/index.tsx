import { IoReload as LoadIcon } from "react-icons/io5";
import { Input } from "..";
import { useAppStateStore } from "../../../_stores/applicationState";
import { InputSubmitSty } from "./style";
import { IconType } from "react-icons";
interface InputSubmitProps{
    onClick: React.MouseEventHandler<HTMLButtonElement>
    text: string
    Icon?: IconType
}
export const InputSubmit = ({onClick, text, Icon}: InputSubmitProps)=>{
    const {isLoading} = useAppStateStore()
    return(
        <InputSubmitSty>
            <Input.Button 
                onClick={onClick}
                text={isLoading ? undefined : text }
                icon={isLoading ? LoadIcon : Icon}
                type="submit"/>
        </InputSubmitSty>
    )
}