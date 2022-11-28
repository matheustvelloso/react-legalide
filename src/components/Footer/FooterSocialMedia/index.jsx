import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const FooterSocialMedia = () => (
    <>
        <div className='bg-footer-2 pt-5 pb-4'>
            <div className="container">
                <div className='d-md-flex justify-content-between text-center'>
                    <div className=" text-white">
                        <h6>Site by <a style={{color:"#0d6efd"} } href="https://github.com/matheustvelloso" target="_blank" rel="noreferrer">Matheus Velloso</a></h6>
                    </div>
                    <div className="mt-4 mt-md-0 pe-social-media">
                        <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookSquare className='icon-social-media'/>
                        </a>
                        <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram className='icon-social-media'/>
                        </a>
                        <a href="http://www.twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter className='icon-social-media'/>
                        </a>
                        <a href="http://www.youtube.com" target="_blank" rel="noreferrer">
                            <FaYoutube className='icon-social-media'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>  
    </>
);

export default FooterSocialMedia;