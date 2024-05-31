import Carousel from "react-multi-carousel";
import { Container, Col, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import vdayCupcakes from "./../images/vdayCupcakes.jpeg";
import mangoLassi from "./../images/mangoLassi1.jpeg";
import turkeyCupcakes from "./../images/turkeyCupcakes.jpeg";
import christCookies from "./../images/christCookies.jpeg";
import springCookies from "./../images/springCookies.jpeg";


export const Baking = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 }, 
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 }, 
            items: 2
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
        <section className="baking" id="bakes">
            <div className="container">
                <div className="row">
                <div className="col-12">
                <div className="skill-bx">
                    <h2> Baking </h2>
                    <p> Outside of my interest in the STEM field, I love unleashing my creativity by baking. It helps me relieve stress and the end result is so sweet (quite literally!). I make all of these from scratch (meaning no box mixes) and don't use eggs </p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={mangoLassi} alt="Image"/> 
                            <h5>Tiramisu</h5>
                        </div>
                        <div className="item">
                            <img src={mangoLassi} alt="Image" /> 
                            <h5>Peanut Butter and Chocolate Cake</h5>
                        </div>
                        <div className="item">
                            <img src={mangoLassi} alt="Image"/> 
                            <h5>Mango Lassi Cheesecake</h5>
                        </div>
                        <div className="item">
                            <img src={vdayCupcakes} alt="Image" /> 
                            <h5>Valentine's Day Cupcakes</h5>
                        </div>
                        <div className="item">
                            <img src={turkeyCupcakes} alt="Image" /> 
                            <h5>Turkey Cupcakes</h5>
                        </div>
                        <div className="item">
                            <img src={christCookies} alt="Image" /> 
                            <h5>Christmas Cookies</h5>
                        </div>
                        <div className="item">
                            <img src={springCookies} alt="Image" /> 
                            <h5>Spring break cookies</h5>
                        </div>
                        <div className="item">
                            <img src={mangoLassi} alt="Image" /> 
                            <h5>Chocolate Fruit Cake</h5>
                        </div>
                    </Carousel>
                </div>
                </div>
                </div>
            </div>
            
        </section>
    )
}