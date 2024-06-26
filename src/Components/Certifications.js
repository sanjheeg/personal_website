import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import c1 from "./../images/c1.png";
import c2 from "./../images/c2.png";
import c3 from "./../images/c3.png";
import c4 from "./../images/c4.png";
import c5 from "./../images/c5.png";
import c6 from "./../images/c6.png";
import cad1 from "./../images/cad1.png";
import cad2 from "./../images/cad2.png";
import graph1 from "./../images/graph1.png";
import graph2 from "./../images/graph2.png";
import graph3 from "./../images/graph3.png";

export const Certifications = () => {

    const cCerts = [
        {
            title: "C Programming: Getting Started", 
            description: "Issued by edX in", 
            imgUrl: c1
        },
        {
            title: "C Programming: Language Foundations", 
            description: "Issued by edX in",
            imgUrl: c2
        }, 
        {
            title: "C Programming: Advanced Data Types", 
            description: "Issued by edX in",
            imgUrl: c3
        }, 
        {
            title: "C Programming: Modular Prorgramming and Memory Management", 
            description: "Issued by edX in",
            imgUrl: c4
        },
        {
            title: "C Programming:Pointers and Memory Management", 
            description: "Issued by edX in",
            imgUrl: c5
        },
        {
            title: "Linux Basics: The Command Line Interface", 
            description: "Issued by edX in",
            imgUrl: c6
        }
    ];

    const cadCerts = [
        {
            title: "OnShape: CAD", 
            description: "Issued by OnShape in ", 
            imgUrl: cad2
        },
        {
            title: "OnShape: Data Management", 
            description: "Issued by OnShape in", 
            imgUrl: cad1
        }
    ];

    const graphCerts = [
        {
            title: "Neo4j Fundamentals", 
            description: "Issued by Neo4j in May 2024", 
            imgUrl: graph1
        },
        {
            title: "Cypher Fundamentals", 
            description: "Issued by Neo4j in May 2024", 
            imgUrl: graph2
        },
        {
            title: "Graph Data Modeling Fundamentals", 
            description: "Issued by Neo4j in June 2024", 
            imgUrl: graph3
        }
    ];

    return (
        <section className="certification" id="certification">
        <Container>
            <Row>
                <Col>
                <h2>Certifications</h2>
                <p> I am a learner and take initiative to learn new concepts outside of the classroom.  </p>
                <Tab.Container id="certifications-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">C and Linux</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">CAD</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Graph Databases</Nav.Link>
                        </Nav.Item>
                    </Nav> 
                    <p></p>
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
                    <Tab.Pane eventKey="third">
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
        </section>
    )
}