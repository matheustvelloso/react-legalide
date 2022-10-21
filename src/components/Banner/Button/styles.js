import styled from "styled-components";

export const Button = styled.button`     
    color: #ffffff;
    background-color: ${({theme})=> theme === "full" ? "#D0A144" : "transparent"};
    border-radius: 37px;
    border: ${({theme})=> theme === "full" ? "none" : "1px solid #fff"};

    &:hover{
        background-color: ${({theme})=> theme === "full" ? "#D0A144" : "transparent"};
        color: #ffffff;
    }
`;
