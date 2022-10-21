import { NavHeader, HeaderMobile } from "./styles";
import {FaBars} from "react-icons/fa";

const Header = () => (
    <> 
        <header className='text-white d-lg-block d-none'>
            <div className='container'>
                <div className='d-flex mt-3 justify-content-between'>
                    <h3 className='p-4'>Legalide</h3>
                    <NavHeader className='d-flex'>
                        <a href='#practice-areas'>Practice Areas</a>
                        <a href='#practice-advice'>Practice Advice</a>
                        <a href='#who-we-are'>Who we are</a>
                        <a href='#contact'>Contact</a>
                    </NavHeader>   
                </div>   
            </div>
        </header>
        <HeaderMobile className='text-white d-lg-none'>
            <div className='container text-center d-flex justify-content-between'>
                <div>
                    <h3 className='p-4'>Legalide</h3>
                </div>
                <div>
                    <button class="mt-4 btn-header" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <FaBars/>
                    </button>
                    <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                      <div class="offcanvas-header">
                        <h5 class="offcanvas-title text-black ms-4" id="staticBackdropLabel">Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body link-black">
                            <nav className='padd d-flex flex-column align-items-start'> 
                                <a href='#practice-areas'>Home</a>
                                <a href='#practice-advice'>Product</a>
                                <a href='#who-we-are'>Pricing</a>
                                <a href='#contact'>Contact</a>
                            </nav>   
                        </div> 
                    </div>    
                </div>
            </div>
        </HeaderMobile>
    </>
);

export default Header;
    