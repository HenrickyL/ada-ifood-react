import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormLinkSty = styled(Link)`
    color: #0000EE;
    transition: 0.4s;
    &:hover{
        text-decoration: underline;
    }
`