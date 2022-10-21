import MainStyle from './styles'
import OurPracticeAreas from './OurPracticeAreas';
import PracticeAdvice from './PracticeAdvice';
import WhoWeAre from './WhoWeAre';
import GetInTouch from './GetInTouch';

const Main = () => (
    <main className='text-white'>
        <OurPracticeAreas />
        <PracticeAdvice />
        <WhoWeAre />
        <GetInTouch />
        <MainStyle />
    </main>
);

export default Main;