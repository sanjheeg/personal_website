import projImg1 from "./../images/project-img1.png";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import rightBackground from "./../images/color-sharp2.png";

export const Projects = () => {

    const completedProjects = [
        {
            title: "Shell", 
            description: "A shell Interpreter that mimics behavior of common command lines such as bash and csh", 
            imgUrl: projImg1
        },
        {
            title: "Donkey Car", 
            description: "Converted an RC car to a self-driving car", 
            imgUrl: projImg1
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
        }
    ];

    const inProgressProjects = [
        
        {
            title: "Personal Website", 
            description: "A website built from Scratch", 
            imgUrl: projImg1
        }
    ];

    return (
        <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Completed</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">In Progress</Nav.Link>
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
                                inProgressProjects.map((project, index) => {
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