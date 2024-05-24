import Carousel from "react-multi-carousel";
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/style.css";
import { skillImage } from "./images/meter1.svg"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 }, 
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 }, 
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 }, 
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 }, 
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                <Col>
                <div className="skill-bx">
                    <h2>
                        Skills
                    </h2>
                    <p>
                        yap yap yap 
                    </p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={skillImage} alr="Image"/> 
                            <h5>C</h5>
                        </div>
                        <div className="item">
                            <img src={skillImage} alr="Image"/> 
                            <h5>Java</h5>
                        </div>
                        <div className="item">
                            <img src={skillImage} alr="Image"/> 
                            <h5>Python</h5>
                        </div>
                        <div className="item">
                            <img src={skillImage} alr="Image"/> 
                            <h5>Swift</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
                </Row>
            </Container>
        </section>
    )

}