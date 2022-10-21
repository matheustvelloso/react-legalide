import { BsTelephone } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {FiSend} from 'react-icons/fi'
import SectionTitle from '../SectionTitle';
import CardGetInTouch from './CardGetInTouch';

const GetInTouch = () => (
    <>
        <div id="contact" className='container text-center'>
            <SectionTitle 
                styles='mt-5 pt-5 pb-5'
                title="Get In Touch"
                text="Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics"
            />
            <div className="row d-flex mt-5 mb-5 justify-content-center pb-5">
                <CardGetInTouch
                    className="p-5 col-lg-3 my-4 bg-white"
                    icon={<BsTelephone className='icon-phone mb-4' />}
                    title1="georgia.young@example.com"
                    title2="georgia.young@example.com"
                    title3="Get Support"
                    text="Submit request"
                    
                />
                <CardGetInTouch 
                    className="p-5 col-lg-3 bg-white text-white"
                    icon={<HiOutlineLocationMarker className='icon-phone mb-4' />}
                    title1="georgia.young@example.com"
                    title2="georgia.young@example.com"
                    title3="Get Support"
                    text="Submit request" 
                />
                <CardGetInTouch 
                    className="p-5 col-lg-3 my-4 bg-white"
                    icon={<FiSend className='icon-phone mb-4' />}
                    title1="georgia.young@example.com"
                    title2="georgia.young@example.com"
                    title3="Get Support"
                    text="Submit request" 
                />
            </div>
            <div className='d-md-flex justify-content-between pt-5 mb-5'>
                <div>
                    <h3>Request A Free Consultation</h3>
                    <p>the quick fox jumps over the lazy dog</p>
                </div>
                <div>
                    <button className='btn-contact'>Contact Us</button>
                </div>
            </div>
        </div>
    </>
);


export default GetInTouch;