import { BsPeopleFill } from 'react-icons/bs';
import { FaHooli, FaLyft, FaStripe, FaAws, FaRedditAlien } from 'react-icons/fa';
import { GiRobinHoodHat} from 'react-icons/gi';

import SectionTitle from '../SectionTitle';

const WhoWeAre = () => (
    <>
        <div id="who-we-are" className='container'>
            <SectionTitle 
                styles="mt-5 pt-5 pb-5 text-center"
                title="Who we are"
                text="Problems trying to resolve the conflict between the two major realms
                of Classical physics: Newtonian mechanics"
            />
            <div className="row row-cols-1 row-cols-lg-2 d-lg-flex container justify-content-between">
                <div className='col text-center'>
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/ImEnWAVRLU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col">
                    <SectionTitle 
                        styles="d-flex flex-column text-start mt-5 mt-lg-0"
                        title="Most trusted in our field"
                        text="Most calendars are designed for teams. Slate is designed for freelancers who want a 
                        simple way to plan their schedule."
                    />
                    <div className='d-flex  mt-5'>
                        <BsPeopleFill className='icon-people' />
                        <div>
                            <h5 className='ms-3'>the quick fox jumps over the lazy<br></br> dog</h5>
                            <h6 className='ms-3'>Things on a very small scale ...</h6>
                        </div>
                    </div>
                    <div className='d-flex mt-5'>
                        <BsPeopleFill className='icon-people'/>
                        <div>
                            <h5 className='ms-3'>the quick fox jumps over the lazy<br></br> dog</h5>
                            <h6 className='ms-3'>Things on a very small scale ...</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='d-flex flex-wrap justify-content-center text-center pt-5'>
                <div>
                    <FaHooli className='icon-hooli'/>
                </div>
                <div>
                    <FaLyft className='icon-hooli'/>
                </div>
                <div>
                    <FaRedditAlien className='icon-hooli'/>
                </div>
                <div>
                    <FaStripe className='icon-hooli'/>
                </div>
                <div>
                    <FaAws className='icon-hooli'/>
                </div>
                <div>
                    <GiRobinHoodHat className='icon-hooli'/>
                </div>
            </div>
            <div className='mt-5'>
                <div className='d-flex flex-wrap justify-content-between bg-blue'>
                    <div className='d-flex align-items-center justify-content-center p-4 my-3  '>
                        <h3 className='h3-mb'>Subscribe For Latest Newsletter</h3>
                    </div>
                    <div className='d-flex align-items-center justify-content-center p-4 my-3'>
                        <input className="input-email p-4 w-md-100" type="email" placeholder='Your email' />
                        <button className='btn-subscribe'>Subscribe</button>
                    </div>
                </div>            
            </div>
        </div>
    </>
);

export default WhoWeAre;