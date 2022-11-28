import { FaBalanceScale} from 'react-icons/fa';
import {ImHammer2} from 'react-icons/im'
import {TbChecklist} from 'react-icons/tb'
import SectionTitle from '../SectionTitle';
import CardOurPracticeAreas from './CardOurPracticeAreas';

const OurPracticeAreas = () => (
    <>
        <div id="practice-areas" className='container text-center'>
            <SectionTitle 
                styles='mt-5 pt-5 pb-5'
                title="Our Practice Areas"
                text="Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics"
            />
           
            <div className='row row-cols-2 d-flex justify-content-center mb-card gap container m-e pe-0 mt-4'>
                <CardOurPracticeAreas 
                    icon={<FaBalanceScale className="icon-balance"/>}
                    title="Family Law"
                />
                    <CardOurPracticeAreas
                    icon={<ImHammer2 className="icon-balance"/>}
                    title="Business"
                />
                <CardOurPracticeAreas 
                    icon={<TbChecklist className="icon-balance"/>}
                    title="Trusts &amp; States" 
                />
                </div>
            </div>
    </>
);
export default OurPracticeAreas;