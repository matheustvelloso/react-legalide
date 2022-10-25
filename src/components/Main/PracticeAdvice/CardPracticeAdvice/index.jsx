import { CardContainer } from "./styles";

const CardPraticeAdvice = ({title,text,src}) => (
    <CardContainer className='col bg-white p-0 d-flex flex-column justify-content-between'>
        <div className="p-3">
            <h5 className='ps-4 pt-4 h5-blue'>{title}</h5>
            <p className='p-second-color ps-4 pt-4'>{text}</p>
        </div>
        <img className='img-fluid w-100' src={src} alt="cover1" />
    </CardContainer>
);

export default CardPraticeAdvice;