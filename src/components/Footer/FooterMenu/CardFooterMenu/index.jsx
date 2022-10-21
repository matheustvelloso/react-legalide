const CardFooterMenu = ({title, div1, div2, div3, subtitle1, subtitle2, subtitle3, subtitle4}) => (
    <div className="mt-4 mb-footer">
        <h5 className='mb-4'>{title}</h5>
        {div1}
        {div2}
        {div3}
        <h6>{subtitle1}</h6>
        <h6>{subtitle2}</h6>
        <h6>{subtitle3}</h6>
        <h6>{subtitle4}</h6>
    </div>
);

export default CardFooterMenu;