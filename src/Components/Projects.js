import { useState,useEffect } from "react"
import projImg1 from "./../images/project-img1.png";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import rightBackground from "./../images/color-sharp2.png";
import selfDrivingCar from "./../images/selfDrivingCar.png"
import shell from "./../images/shell.png";
import OOTD from "./../images/OOTD.png";
import website from "./../images/website.png";
import cs251 from "./../images/251.png";
import cs252 from "./../images/252.png";
import cs180 from "./../images/180.png";
import cs240 from "./../images/240.png";

export const Projects = () => {

    const completedProjects = [
        {
            title: "Shell", 
            description: "A shell Interpreter that mimics behavior of common command lines such as bash and csh", 
            imgUrl: shell
        },
        {
            title: "Donkey Car", 
            description: "Converted an RC car to a self-driving car. Full instructions can be found on my Instructable: https://www.instructables.com/Self-Driving-Car-2/", 
            imgUrl: selfDrivingCar
        }, 
        {
            title: "OOTD: Outfit of the Day", 
            description: "A virtual closet with marketplace and social features", 
            imgUrl: OOTD
        }, 
        {
            title: "Marketplace", 
            description: "A Java GUI app that allows messaging between accounts and selling ", 
            imgUrl: projImg1
        },
        {
            title: "Personal Website", 
            description: "A website built from Scratch", 
            imgUrl: website
        }
    ];

    const completedNotes = [
        {
            title: "Object-Oriented Programming in Java", 
            description: "can be found at: ", 
            imgUrl: cs180
        },
        {
            title: "Programming in C", 
            description: "can be found at: ", 
            imgUrl: cs240
        },
        {
            title: "Data Structures and Algorithms", 
            description: "can be found at: ", 
            imgUrl: cs251
        },
        {
            title: "Systems Programming", 
            description: "can be found at: ", 
            imgUrl: cs252
        }
        
        
    ];

    return (
        <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>Projects & Notes</h2>
                <p></p>
                
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Notes</Nav.Link>
                        </Nav.Item>
                    </Nav> 
                   <p></p>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                        <p> I believe that projects are an excellent way to learn </p>
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
                        <p>Here are some notes I've taken for my classes</p>
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