import styled from "styled-components";
export const InputRootSty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 4px;

    svg{
        color: ${prop=>prop.theme.contrast};
        background-color: transparent;
        font-size: ${prop => prop.theme.iconSize};
    }
`