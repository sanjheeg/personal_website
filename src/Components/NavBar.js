import { useState,useEffect } from "react"
import { Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    //see if user has scrolled to change bcknd 
    const [scrolled, seScrolled] = useState(false);
    //function that determines what happens upon scroll
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll) 
        //when the component is gone we remove the event listener 
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand = "lg"className = {scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand href = "#home"> <img src={''} alt="Logo" /> </Navbar.Brand>
                
                //when window in small shape so image like dotted hamurger
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "me-auto">
                        <Nav.Link href = "#home" className = {activeLink == 'home' ? 'active navbrar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href = "#art" className = {activeLink == 'art' ? 'active navbrar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('art')}>Skills</Nav.Link>
                        <Nav.Link href = "#projects" className = {activeLink == 'projects' ? 'active navbrar-link' : 'navbar-link'}  onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    
                    //for social media --linkedin + mail
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}