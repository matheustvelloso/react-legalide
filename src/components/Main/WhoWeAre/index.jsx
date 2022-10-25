import { BsPeopleFill } from 'react-icons/bs';
import { FaHooli, FaLyft, FaStripe, FaAws, FaRedditAlien } from 'react-icons/fa';
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
            <div className="row row-cols-1 row-cols-lg-3 d-lg-flex justify-content-between">
                <div className='col text-center'>
                    <iframe className='d-none d-xl-block' width="700" height="442" src="https://www.youtube.com/embed/ImEnWAVRLU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className='d-none d-lg-block d-xl-none' width="597" height="442" src="https://www.youtube.com/embed/ImEnWAVRLU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className='d-none d-md-block d-lg-none' width="700" height="442" src="https://www.youtube.com/embed/ImEnWAVRLU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className='d-none d-sm-block d-md-none' width="530" height="442" src="https://www.youtube.com/embed/ImEnWAVRLU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe className='d-block d-sm-none' width="300" height="442" src="https://www.youtube.com/embed/ImEnWAVRLU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                    <FaRedditAlien className='icon-hooli'/>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='d-flex flex-wrap justify-content-between bg-blue'>
                    <div className='d-flex align-items-center justify-content-center p-4 mt-3'>
                        <h3>Subscribe For Latest <br></br> Newsletter</h3>
                    </div>
                    <div className='d-flex align-items-center p-4 mt-3'>
                        <input className="input-email p-4 w-md-100" type="email" placeholder='Your email' />
                        <button className='btn-subscribe'>Subscribe</button>
                    </div>
                </div>            
            </div>
        </div>
    </>
);

export default WhoWeAre;