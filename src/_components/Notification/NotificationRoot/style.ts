import styled from "styled-components";
import { notificationColors } from "../../../_hooks/theme";
import { NotificationTypes } from "../../../_interfaces/notification";
interface NotificationFieldStyProps{
    type: NotificationTypes
}

export const NotificationRootSty = styled.div<NotificationFieldStyProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 100%;
    transition: 0.4s;
    border-radius: 8px;
    border: 2px solid ${(props) => notificationColors[props.type](props).default };
    padding: 0.5rem;
    background-color: ${(props) => 
        notificationColors[props.type](props).background ||
        props.theme.background
    };
    filter: brightness(0.97);


    &:hover{
        filter: brightness(1);
        transform: translateX(4px);
    }
`