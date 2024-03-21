import { InputLabel } from "./Input.Label";
import { InputButton } from "./InputButton";
import { InputField } from "./InputField";
import { InputIcon } from "./InputIcon";
import { InputInput } from "./InputInput";
import { InputPassword } from "./InputPassword";
import { InputRoot } from "./InputRoot";
//use pattern composition 
export const Input = {
    Root: InputRoot,
    Button: InputButton,
    Icon: InputIcon,
    Input: InputInput,
    Field: InputField,
    Password: InputPassword,
    Label: InputLabel
}