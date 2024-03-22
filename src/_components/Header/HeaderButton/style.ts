import styled from "styled-components";
interface HeaderButtonStyProp{
    type?: 'default' | 'primary'
}
export const HeaderButtonSty = styled.div<HeaderButtonStyProp>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 4px;
    border-radius: 8px;
    border: 2px solid transparent;
    transition: 0.5s;
    padding: 4px;
    background-color: ${prop=>prop.type ? prop.theme.primary : 'transparent'};

    span{
        font-weight: bold;
    }

    &:hover{
        border: 2px solid ${prop=>prop.theme.contrast};
    }
`