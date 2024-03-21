import styled from "styled-components";

interface NotificationActionStyProps{
    type: 'primary' | 'secondary'
}

export const NotificationActionSty = styled.button<NotificationActionStyProps>`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 2px solid  transparent;
    background-color: ${prop=> prop.type ==='primary' ?
        prop.theme.primary : 'transparent' };
    padding: 4px;
    filter: brightness(0.8);
    transition: 0.4s;

    svg{
        font-size: ${prop=>`${prop.theme.settings.iconSize}px`};
    }
    
    &:hover{
        border: 2px solid  ${prop=> prop.theme.contrastLight };
        filter: brightness(1);
    }
`