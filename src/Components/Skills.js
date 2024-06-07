import Carousel from "react-multi-carousel";
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import cadSkill from "./../images/cadSkill.png";
import cppSkill from "./../images/cppSkill.png";
import cSkill from "./../images/cSkill.png";
import pythonSkill from "./../images/pythonSkill.png";
import swiftSkill from "./../images/swiftSkill.png";
import shellScriptingSkill from "./../images/shellScriptingSkill.png";
import x86Skill from "./../images/x86Skill.png";
import javaSkill from "./../images/javaSkill.png";
import leftBackground from "../images/color-sharp.png";


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
            <div className="container">
                <div className="row">
                <div className="col-12">
                <div className="skill-bx">
                    <h2> Skills </h2>
                    <p> I've excelled in these skills with the help of Purdue courses, online certification courses, and projects </p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={cSkill} alt="Image" width="250"/> 
                            <h5>CS240, 6 certifications</h5>
                        </div>
                        <div className="item">
                            <img src={javaSkill} alt="Image" width="250"/> 
                            <h5>CS180, CS251</h5>
                        </div>
                        <div className="item">
                            <img src={pythonSkill} alt="Image" width="250"/> 
                            <h5>CS380, 1 certification</h5>
                        </div>
                        <div className="item">
                            <img src={swiftSkill} alt="Image" width="250"/> 
                            <h5>CS307</h5>
                        </div>
                        <div className="item">
                            <img src={shellScriptingSkill} alt="Image" width="250"/> 
                            <h5>CS252</h5>
                        </div>
                        <div className="item">
                            <img src={cppSkill} alt="Image" width="250"/> 
                            <h5>CS252</h5>
                        </div>
                        <div className="item">
                            <img src={x86Skill} alt="Image" width="250"/> 
                            <h5>CS250</h5>
                        </div>
                        <div className="item">
                            <img src={cadSkill} alt="Image" width="250"/> 
                            <h5>3 certifications</h5>
                        </div>
                    </Carousel>
                </div>
                </div>
                </div>
            </div>
            
        </section>
    )
}