const CardPraticeAdvice = ({title,text,src}) => (
    <div className='col-4 card-2'>
        <h5 className='ps-4 pt-4 h5-blue'>{title}</h5>
        <p className='p-second-color ps-4 pt-4'>{text}</p>
        <img className='img-responsive w-100' src={src} alt="cover1" />
    </div>
);

export default CardPraticeAdvice;