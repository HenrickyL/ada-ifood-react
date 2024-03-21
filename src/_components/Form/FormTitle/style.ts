import styled from "styled-components";

export const FormTitleSty = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    /* color: ${prop=>prop.theme.primary};
    text-shadow: 
        0 0 5px ${prop=>prop.theme.primary},
        0 0 25px ${prop=>prop.theme.primary}; */
    h1, h2{
        color: ${prop=>prop.theme.text};
        font-weight: bold;
        letter-spacing: 0.2em;
    }
    
`