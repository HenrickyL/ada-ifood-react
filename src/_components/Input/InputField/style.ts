import styled, { css } from "styled-components";
import { InputLabelSty } from "../Input.Label/style";

interface InputFieldStyProps{
    $error?: boolean | string | undefined;
}

export const InputFieldSty = styled.div<InputFieldStyProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    width: 100%;
    gap: 4px;
    border: 2px solid ${prop=> prop.$error ? 
        prop.theme.notification.error.default : 
        prop.theme.contrastLight};
    border-radius: 8px;
    padding: 12px;
    background: ${prop=> prop.$error ? 
        prop.theme.notification.error.background :
        prop.theme.input.background};
    
    
    transition: ${prop=>`${prop.theme.settings.normalTransition}ms`};

    &:hover{
        background-color: ${prop=> 
            prop.theme.background};
    }

    &:focus-within{
        background-color: ${prop=> 
            prop.theme.background};
        border: 2px solid ${prop=> prop.theme.contrast};
        ${InputLabelSty}{
            position:absolute;
            top: -25%;
            border-radius:8px;
            padding:4px;
            background-color: ${prop=>prop.theme.primary}
        }
    }
`