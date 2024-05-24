import { useState,useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/nav-icon2.svg";
import navIcon3 from "../images/nav-icon3.svg";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    /*see if user has scrolled to change bcknd */
    const [scrolled, seScrolled] = useState(false);

    /*function that determines what happens upon scroll*/
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll) 
        /*when the component is gone we remove the event listener */
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand = "lg"className = {scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand href = "#home"> 
                <img src={logo} alt="Logo" />
                 </Navbar.Brand>
                
                
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "me-auto">
                        <Nav.Link href = "#home" className = {activeLink == 'home' ? 'active navbrar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href = "#art" className = {activeLink == 'art' ? 'active navbrar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('art')}>Art</Nav.Link>
                        <Nav.Link href = "#skills" className = {activeLink == 'skills' ? 'active navbrar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href = "#projects" className = {activeLink == 'projects' ? 'active navbrar-link' : 'navbar-link'}  onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href = "#notes" className = {activeLink == 'notes' ? 'active navbrar-link' : 'navbar-link'}  onClick = {() => onUpdateActiveLink('notes')}>Projects</Nav.Link>
                    </Nav>
                    
                    
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}