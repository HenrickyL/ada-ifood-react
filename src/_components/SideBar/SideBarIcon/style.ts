import styled from "styled-components";

export const SideBarIconSty = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    
    border-radius: 50%;
    transition: 0.5s;
    transition-delay: 0.2s;
    color: ${prop=>prop.theme.contrastLight || '#aaa'};
    width: 52px;
    height: 52px;

    svg{
        font-size: 1.75em;
        width: 44%;
        height: 44%;
        z-index: 1;
    }

    &:before{
        content: '';
        position: absolute;
        inset: 4px ;
        background-color: ${prop=>prop.theme.background};
        border-radius: 50%;
        box-shadow: 5px 5px 5px rgba(0,0,0, 0.5),
        inset 2px 2px 3px rgba(255,255,255,0.2),
        inset -3px -3px 5px rgba(0,0,0,0.5);
        transform: scale(0);
        transition: 0.5s;
    }

`