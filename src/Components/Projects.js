import projImg1 from "./../images/project-img1.png";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import rightBackground from "./../images/color-sharp2.png";
import selfDrivingCar from "./../images/selfDrivingCar.png"

export const Projects = () => {

    const completedProjects = [
        {
            title: "Shell", 
            description: "A shell Interpreter that mimics behavior of common command lines such as bash and csh", 
            imgUrl: projImg1
        },
        {
            title: "Donkey Car", 
            description: "Converted an RC car to a self-driving car. Full instructions can be found on my Instructable: https://www.instructables.com/Self-Driving-Car-2/", 
            imgUrl: selfDrivingCar
        }, 
        {
            title: "OOTD: Outfit of the Day", 
            description: "A virtual closet with marketplace and social features", 
            imgUrl: projImg1
        }, 
        {
            title: "Marketplace", 
            description: "A Java GUI app that allows messaging between accounts and selling ", 
            imgUrl: projImg1
        },
        {
            title: "Personal Website", 
            description: "A website built from Scratch", 
            imgUrl: projImg1
        }
    ];

    const completedNotes = [
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
        <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects & Notes</h2>
                
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Notes</Nav.Link>
                        </Nav.Item>
                    </Nav> 
                    <p> more yada </p>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                completedProjects.map((project, index) => {
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
                                completedNotes.map((project, index) => {
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