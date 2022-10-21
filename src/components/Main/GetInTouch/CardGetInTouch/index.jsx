const CardGetInTouch = ({className,icon,title1,title2,title3,text}) => (
    <div className={className}>
        {icon}
        <h6 className='h5-blue'>{title1}</h6>
        <h6 className='h5-blue'>{title2}</h6>
        <h5 className='h5-blue mt-4'>{title3}</h5>
        <button className='btn-submit mt-2' type='submit'>{text}</button>
    </div>
);
export default CardGetInTouch;