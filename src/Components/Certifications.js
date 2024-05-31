import projImg1 from "./../images/project-img1.png";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import rightBackground from "./../images/color-sharp2.png";
import selfDrivingCar from "./../images/selfDrivingCar.png"

export const Certifications = () => {

    const cCerts = [
        {
            title: "C Programming: Getting Started", 
            issued: "Issued by edX in", 
            imgUrl: projImg1
        },
        {
            title: "C Programming: Language Foundations", 
            issued: "Issued by edX in",
            imgUrl: selfDrivingCar
        }, 
        {
            title: "C Programming: Advanced Data Types", 
            issued: "Issued by edX in",
            imgUrl: projImg1
        }, 
        {
            title: "C Programming: Modular Prorgramming and Memory Management", 
            issued: "Issued by edX in",
            imgUrl: projImg1
        },
        {
            title: "C Programming:Pointers and Memory Management", 
            issued: "Issued by edX in",
            imgUrl: projImg1
        },
        {
            title: "Linux Basics: The Command Line Interface", 
            issued: "Issued by edX in",
            imgUrl: projImg1
        }
    ];

    const cadCerts = [
        {
            title: "OnShape: CAD", 
            issued: "Issued by OnShape in ", 
            imgUrl: projImg1
        },
        {
            title: "OnShape: Data Management", 
            issued: "Issued by OnShape in", 
            imgUrl: projImg1
        }
    ];

    const graphCerts = [
        {
            title: "Data Structures and Algorithms", 
            description: "can be found at: ", 
            imgUrl: projImg1
        },
        {
            title: "Systems Programming", 
            description: "can be found at: ", 
            imgUrl: projImg1
        },
        {
            title: "Software Engineering", 
            description: "can be found at: ", 
            imgUrl: projImg1
        }
    ];

    return (
        <section className="certifications" id="certification">
        <Container>
            <Row>
                <Col>
                <h2>Certificationss</h2>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">C and Linux</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">CAD</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Graph Databases</Nav.Link>
                        </Nav.Item>
                    </Nav> 
                    <p> more yada </p>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                cCerts.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                        {
                                cadCerts.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                        {
                                graphCerts.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container> 
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={rightBackground}></img>
        </section>
    )
}