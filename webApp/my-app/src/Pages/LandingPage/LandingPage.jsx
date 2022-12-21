import React from "react";
import "./LandingPage.scss";
import CanvasPortrait from "./../../Components/CanvasPortrait/CanvasPortrait";
import TextEffect1 from "./../../Components/TextEffect1/TextEffect1";
import ContactLetter from "./../../Components/ContactLetter/ContactLetter";
import TextQuote from "./../../Components/TextQuote/TextQuote";
import GalleryPollaroid from "./../../Components/GalleryPollaroid/GalleryPollaroid";
import { Animated } from 'react-animated-css'
import Cubes from "../../Components/Cubes/Cubes";
import { useSelector } from "react-redux";

const LandingPage = () => {
    const theme = useSelector((state) => state.theme);
    const [imgSrc, setImgSrc] = React.useState("");

    const myIntroTxt = <p>
        Welcome to my personal domain, here I share some of my interests.
        <br /> This is a React.js application with a Express Node.js backend server, used to practice and explore webApp development, aiming mobile to big screen responsiveness. I'm also deploying automatically over a pipeline with CircleCI at a push of Github.
        <br />
        <br /> Hover, scroll and click to trigger animations! Join the dark side or turn on the light theme by toggling the time button. Browse the menu to find my life racecourse, aka <em>curriculum vitae</em>, where one can take a look or download a .pdf version. 
        <br />Enjoy a beautiful sunrise by Studio rooftop, scroll down to the art gallery, stay for the basement games! Studio is a place of study in 3 dimensions to explore new ways of user interactivity.
        <br />At news I'll be sharing projects for the future! Check it out and let me know what you think of it!
    </p>;

    React.useEffect(() => {
        setImgSrc(theme === "darkTheme" ? require("./favThingsWhite.png") : require("./favThings.png"));
    }, [theme]);

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
                        {myIntroTxt}
                    </p>
                </div>
            </section>
            <section id="interests">
                <figure><img src={imgSrc} alt="" /></figure>
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
