import { BsTelephone } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {FiSend} from 'react-icons/fi'
import CardFooterMenu from './CardFooterMenu';
import IconFooterMenu from './IconFooterMenu';

const FooterMenu = () => (
    <>
        <div className='container text-white mt-5 mb-5'>
            <div className='d-lg-flex justify-content-between text-center'>
               <CardFooterMenu className="mt-4 mb-footer"
                    title="Company Info"
                    subtitle1="About Us"
                    subtitle2="Carrier"
                    subtitle3="We are hiring"
                    subtitle4="Blog"
               />
               <CardFooterMenu className="mt-4 mb-footer"
                    title="Legal"
                    subtitle1="About Us"
                    subtitle2="Carrier"
                    subtitle3="We are hiring"
                    subtitle4="Blog"
               />
                <CardFooterMenu className="mt-4 mb-footer"
                    title="Features"
                    subtitle1="Business Marketing"
                    subtitle2="User Analytic"
                    subtitle3="Live Chat"
                    subtitle4="Unlimited Support"
               />
                <CardFooterMenu className="mt-4 mb-footer"
                    title="Resources"
                    subtitle1="IOS &amp; Android"
                    subtitle2="Customers"
                    subtitle3="Live Chat"
                    subtitle4="API"
               />
               <CardFooterMenu className="mt-4 mb-footer "
                    title="Get In Touch"
                    div1= {<IconFooterMenu className="d-flex justify-content-center"
                        icon={<BsTelephone className='icon-phone-footer'/>}
                        title="(480) 555-0103"
                    />}
                    div2={<IconFooterMenu className="d-flex justify-content-center"
                        icon={<HiOutlineLocationMarker className='icon-phone-footer'/>}
                        title="4517 Washington Ave."
                    />}
                    div3={<IconFooterMenu className="d-flex justify-content-center"
                        icon={<FiSend className='icon-phone-footer'/>}
                        title="debra.holt@example.com"
                    />}
                />
            </div>
        </div>
    </>
);

export default FooterMenu;