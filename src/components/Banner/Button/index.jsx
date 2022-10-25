import { Button as ButtonContainer } from "./styles";

const Button = ({ theme = "full", text}) => (
    <ButtonContainer  type="button" className='btn' theme={theme} >{text}</ButtonContainer>
);

export default Button;