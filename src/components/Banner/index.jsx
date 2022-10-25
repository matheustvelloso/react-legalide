import Agent from '../assets/agent.png';
import Button from './Button';
const Banner = () => (
    <>
        <div className='container d-md-flex justify-content-between mt-4 d-none'>
            <div className='d-flex flex-column justify-content-center'>
                <h1 className='text-white'>LEGAL PRO <br></br>SERVICES</h1>
                <h4 className='text-white'>We know how large objects will act,<br></br>but things on a small scale.</h4>
                <div className='mt-4 mb-4 gap d-flex' >
                    <Button    
                        theme="full"                                                                                     
                        text="Get Quote Now"
                    />
                    <Button                                                                                         
                        theme="line"
                        text="Learn More"
                    />
                </div>
            </div>
            <div>
                <img className='img-fluid'src={Agent} alt='Agent'></img>
            </div>
        </div>
        <div className='container d-flex flex-column text-center d-md-none'>
            <h1 className='text-white align-self-center mt-5 pt-4'>LEGAL PRO <br></br>SERVICES</h1>
            <h4 className='text-white'>We know how large <br></br>objects will act,but things on a small scale just do <br></br> not act that way.</h4>
            <div className='d-flex flex-column align-self-center mt-4 mb-4 gap'>
                <Button                                                                                         
                    styles="btn btn-yellow me-2"
                    text="Get Quote Now"
                />
                <Button                                                                                         
                    styles="btn btn-transparent ms-3 mt-3"
                    text="Learn More"
                />
            </div>
            <img className='img-fluid mt-5' src={Agent} alt='Agent'></img>
        </div>
    </>
);

export default Banner;