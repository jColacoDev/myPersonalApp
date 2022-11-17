import React from "react";
import "./LandingPage.scss";
import CanvasPortrait from "./../../Components/CanvasPortrait/CanvasPortrait";
import TextEffect1 from "./../../Components/TextEffect1/TextEffect1";
import ContactLetter from "./../../Components/ContactLetter/ContactLetter";
import TextQuote from "./../../Components/TextQuote/TextQuote";
import GalleryPollaroid from "./../../Components/GalleryPollaroid/GalleryPollaroid";
import GalleryCards from "./../../Components/GalleryCards/GalleryCards";
import { Animated } from 'react-animated-css'
import Cubes from "../../Components/Cubes/Cubes";

const LandingPage = () => {

    return (
        <Animated 
            animationIn="fadeIn" 
            animationOut="fadeOut"
        >
        <main className="LandingPage">
            <section id="AboutMe">
                <TextEffect1></TextEffect1>
                <div className="flexGrid">
                    <CanvasPortrait></CanvasPortrait>
                    <p className="myIntro">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Architecto eveniet ipsa pariatur reprehenderit
                        distinctio modi aperiam earum, provident eius quos
                        libero aliquid repellat deserunt vero, facere
                        perferendis excepturi labore velit!
                    </p>
                </div>
            </section>
            <section id="interests">
                <GalleryPollaroid></GalleryPollaroid>
                <Cubes></Cubes>
            </section>
            <section id="contactMe">
                <TextQuote></TextQuote>
                <ContactLetter></ContactLetter>
            </section>
        </main>
    </Animated>
    );
};

export default LandingPage;
