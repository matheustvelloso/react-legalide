import Cover1 from '../../assets/cover-1.jpg'
import Cover2 from '../../assets/cover-2.jpg'
import Cover3 from '../../assets/cover-3.jpg'
import Cover4 from '../../assets/cover-4.jpg'
import SectionTitle from '../SectionTitle';
import CardPraticeAdvice from './CardPracticeAdvice';

const PracticeAdvice = () => (
    <>
        <div id="practice-advice" className='container'>
            <SectionTitle 
                styles="mt-5 pt-5 pb-5 text-center"
                title="Practice Advice"
                text="Problems trying to resolve the conflict between
                the two major realms of Classical physics: Newtonian mechanics"
            />
            <div className='row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 d-flex justify-content-center mb-card gap mt-4'>
                <CardPraticeAdvice
                    title="Frauds or Mislead"
                    text="Newton thought that light was made up of particles, but then it was discovered"
                    src={Cover1} 
                />
                <CardPraticeAdvice
                    title="Bailes &amp; Warrants"
                    text="“Quantum mechanics” is the description of the behaviour of matter"
                    src={Cover2} 
                />
                <CardPraticeAdvice
                    title="Federal Drug Crimes"
                    text="They describe a universe consisting of bodies moving"
                    src={Cover3} 
                />
                <CardPraticeAdvice
                    title="Traffic Related Crimes"
                    text="They finally obtained a consistent description of the behaviour"
                    src={Cover4} 
                />
            </div>
        </div>
    </>
);

export default PracticeAdvice;
