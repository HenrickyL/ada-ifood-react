import styled, { keyframes } from "styled-components";
const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`
export const InputSubmitSty = styled.div`
    svg{
        transition: 0.5s;
        animation: ${spin} 1s ease-in infinite;
        font-size: 18px;
    }
`