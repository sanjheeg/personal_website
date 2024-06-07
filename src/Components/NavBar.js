import { useState,useEffect } from "react"
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.svg";
import navIcon1 from "../images/nav-icon1.svg";
import navIcon2 from "../images/email.svg";
import navIcon3 from "../images/github.png";
import favicon from "../images/logo.png";

export const NavBar = () => {
    const handleIconClick = (url) => {
        window.location.href = url;
    };

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

    // Function to update the favicon
    const updateFavicon = (icon) => {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
        }
        link.href = icon;
    };

    useEffect(() => {
        document.title = "⭐️ Sanjhee Gupta";
        updateFavicon(favicon);
    }, []);

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
                        <Nav.Link href = "#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home') }>Home</Nav.Link>
                        <Nav.Link href = "#skills" className = {activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href = "#project" className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href = "#experience" className = {activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}  onClick = {() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link href = "#certification" className = {activeLink === 'certifications' ? 'active navbar-link' : 'navbar-link'}  onClick = {() => onUpdateActiveLink('certifications')}>Certifications</Nav.Link>
                        <Nav.Link href = "#bakes" className = {activeLink === 'baking' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('baking')}>Baking</Nav.Link>
                    </Nav>
                    
                    
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="javascript:void(0);" onClick={(e) => { e.preventDefault(); handleIconClick('https://www.linkedin.com/in/sanjhee-gupta/'); }}>
                                <img src={navIcon1} alt="" />
                            </a>   
                            <a href="mailto:gupta851@purdue.edu">
                                <img src={navIcon2} alt="" />
                            </a> 
                            <a href="javascript:void(0);"><img src={navIcon3} alt="" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}