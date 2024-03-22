import { NavLink } from "react-router-dom";
import styled from "styled-components";
interface NavigationItemSty{
    type?: 'default' | 'primary'
}

export const NavigationItemSty = styled(NavLink)<NavigationItemSty>`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 2px solid transparent;
    transition: 0.5s;
    padding: 4px;
    background-color: ${prop=>prop.type ? prop.theme.primary : 'transparent'};
    position: relative;
    transition: 0.5s;
    font-weight: bold;

    &.active{
        border-radius: 40% 2px;
        border: 2px solid black;
        background-color: ${prop=>prop.theme.secondary};
       
        
    }

    span{
        font-weight: bold;
    }
    ${prop=> prop.type === 'primary' &&`
        &:hover{
            border: 2px solid ${prop.theme.contrast};
        }
    `}
    
`