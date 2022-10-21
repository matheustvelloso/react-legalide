import { Button as ButtonContainer } from "./styles";

const Button = ({className, theme = "full", text}) => (
    <ButtonContainer  className={`btn ${className}`} theme={theme} >{text}</ButtonContainer>
);

export default Button;