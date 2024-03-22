import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardTitle = styled.span`
`

export const ProductCardOldPrice = styled.span`
`

export const ProductCardPrice = styled.span`
`
export const ProductCardInterest = styled.span`
`

export const ProductCardField = styled.div`
`

export const ProductCardFieldInfo = styled.div`
`
export const ProductCardCart = styled.div``

export const ProductCardSty = styled.div`
    font-weight: bold;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 10rem;
    max-width: 16rem;

    gap: 8px;
    border-radius: 8px;
    border: 1px solid ${prop=>prop.theme.contrast};
    overflow: hidden;
    img{
        max-height: 14rem;
        width: 100%;
        object-fit: cover;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
        padding: 8px;
        height: 100%;
        ${ProductCardTitle}{
            text-align: center;
            font-size: 18px;
        }
        
        ${ProductCardFieldInfo}{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            ${ProductCardInterest}{
                font-size: 14px;
            }
        }

        ${ProductCardField}{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 4px;

            ${ProductCardOldPrice}{
                text-decoration: line-through;
                font-size: 12px;
                color: ${prop=>prop.theme.contrastLight};
            }
        } 
    }

    ${ProductCardCart}{
        position: absolute;
        color: ${prop=>prop.theme.contrast};
        font-size: 20px;
        bottom: 4px;
        left: 0px;
        transition: 0.5s;
        cursor: pointer;
        width: min-content;
        height: min-content;

        &:hover{
            color: ${prop=>prop.theme.contrastLight};
        }
    }
`