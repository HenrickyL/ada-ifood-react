import styled from "styled-components";

export const SigninSty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        min-width: 20rem;
        width:25rem;
        max-width: 30rem;
        border-radius: 8px;
    }

    .backIcon{
        cursor: pointer;
        position: absolute;
        top: 1rem;
        left: 1rem;
    }
`