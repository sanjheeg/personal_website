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


    return (
        <Navbar expand = "lg" >
            <Container>
                <Navbar.Brand href = "#home"> <img src={''} alt="Logo" /> </Navbar.Brand>
                
                //when window in small shape so image like dotted hamurger
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "me-auto">
                        <Nav.Link href = "#home">Home</Nav.Link>
                        <Nav.Link href = "#skills">Skills</Nav.Link>
                        <Nav.Link href = "#projects">Projects</Nav.Link>
                        <Nav.Link href = "#art">Art</Nav.Link>
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