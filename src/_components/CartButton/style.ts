import styled from "styled-components";

export const CartButtonSty = styled.div`
    position: relative;
    display: flex;
    transition: 0.5s;
    padding: 4px;

    &:hover{
        svg{
            color: ${prop=>prop.theme.contrastLight};
        }
        span{
            border: 2px solid ${prop=>prop.theme.contrastLight};
        }
    }

    & span{
        position: absolute;
        width: 20px;
        height: 20px;
        font-size:12px;
        text-align: center;
        color: white;
        font-weight: bold;
        border-radius: 50%;
        background-color: red;
        border: 2px solid ${prop=>prop.theme.contrast};
        top: -8px;
        right: -8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`