import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardTitle = styled.span`
    text-align: center;
    font-size: 18px;
`
export const ProductCardOldPrice = styled.span`
    text-decoration: line-through;
    font-size: 12px;
    color: ${prop=>prop.theme.contrastLight};
`
export const ProductCardPrice = styled.span``
export const ProductCardInterest = styled.span``
export const ProductCardField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`
export const ProductCardFieldInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${ProductCardInterest}{
        font-size: 14px;
    }
`
export const ProductCardCart = styled.div`
    position: absolute;
    color: ${prop=>prop.theme.contrast};
    font-size: 20px;
    bottom: 4px;
    left: 4px;
    transition: 0.5s;
    cursor: pointer;
    width: min-content;
    height: min-content;

    &:hover{
        color: ${prop=>prop.theme.contrastLight};
    }
`
export const ProductCardRating = styled.span`
    display: flex;
    gap:4px;
    align-items: center;
    padding: 8px;
    svg{
        color: gold;
        filter: drop-shadow(0 0 0.2rem black); 
    }
`
export const ProductCardContainer = styled(Link)`
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 10rem;
    max-width: 16rem;
    text-decoration: none;
    color: unset;

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
    }
`
export const ProductCardSty = styled.div`
    position: relative;
    
`