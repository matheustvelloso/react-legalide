const CardOurPracticeAreas = ({icon, title}) => (
    <div className="col-md-4 card">
        <div className="mt-4">
            {icon}
        </div>
        <h5 className="h5-blue">{title}</h5>
    </div>
);

export default CardOurPracticeAreas;