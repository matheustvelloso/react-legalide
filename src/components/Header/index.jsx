import { NavHeader, HeaderMobile, Nav, MenuMobile, MenuOverlay } from "./styles";
import { VscThreeBars, VscChromeClose } from 'react-icons/vsc'
import Container from "../Container";
import { useState } from "react";

const Header = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
        <> 
            <MenuOverlay isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)} className="d-flex d-lg-none position-fixed h-100 w-100"/>
            <MenuMobile isMenuOpened={isMenuOpened} className="d-flex flex-column d-lg-none position-fixed bg-white">
                <VscChromeClose onClick={() => setIsMenuOpened(false)} className="align-self-end mb-5" />
                <Container>
                    <Nav className="d-flex flex-column justify-content-between align-items-center col">
                        <a onClick={() => setIsMenuOpened(false) } className="pb-3" style={{whiteSpace: 'nowrap'}} href='#practice-areas'>Practice Areas</a>
                        <a onClick={() => setIsMenuOpened(false) } className="pb-3" style={{whiteSpace: 'nowrap'}} href='#practice-advice'>Practice Advice</a>
                        <a onClick={() => setIsMenuOpened(false) } className="pb-3" style={{whiteSpace: 'nowrap'}} href='#who-we-are'>Who we are</a>               
                        <a onClick={() => setIsMenuOpened(false) } className="pb-3" style={{whiteSpace: 'nowrap'}} href='#contact'>Contact</a>
                    </Nav>
                </Container>
            </MenuMobile>
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
                    <h3 className='p-4'>Legalide</h3>
                    <VscThreeBars className='m-4' onClick={() => setIsMenuOpened(true)}/>            
                </div>
            </HeaderMobile>  
        </>
)};

export default Header;
    