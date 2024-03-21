import styled from "styled-components";


export const InputButtonSty = styled.button`
   font-weight: bold;
   padding: 0.5rem 1rem ;
   border-radius: 8px;
   background-color: ${prop=>prop.theme.primary};
   border: 2px solid ${prop=>prop.theme.primaryLight};
   transition: 0.5s;

   &:hover, &:focus{
    border: 2px solid ${prop=>prop.theme.contrast};
    border-radius: 12px;
   }
`