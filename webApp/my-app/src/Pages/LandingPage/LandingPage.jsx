import React from "react";
import "./LandingPage.scss";
import { ParallaxBanner1 } from "./../../Components/ParallaxBanner1/ParallaxBanner1";
import MenuButton from "../../Components/MenuButton/MenuButton";
import CanvasPortrait from "./../../Components/CanvasPortrait/CanvasPortrait";
import TextEffect1 from "./../../Components/TextEffect1/TextEffect1";
import ContactLetter from "./../../Components/ContactLetter/ContactLetter";
import TextQuote from "./../../Components/TextQuote/TextQuote";
import GalleryPollaroid from "./../../Components/GalleryPollaroid/GalleryPollaroid";
import GalleryCards from "./../../Components/GalleryCards/GalleryCards";
import DayNight1 from "./../../Components/DayNight1/DayNight1";
import ThemeToggle from "../../Components/ThemeToggle/ThemeToggle";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <main className="LandingPage">
            <div>
                <DayNight1 theme={theme}></DayNight1>
                <ParallaxBanner1 />
            </div>
            <ThemeToggle themeToggle={theme}></ThemeToggle>
            <MenuButton></MenuButton>
            <nav>
                <Link>I am</Link>
                <Link>I like</Link>
                <Link>I do</Link>
                <figure></figure>
            </nav>

            <section className="AboutMe">
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
            <section>
                <TextQuote></TextQuote>
                <ContactLetter></ContactLetter>
            </section>
            <section>
                <GalleryPollaroid></GalleryPollaroid>
                <GalleryCards></GalleryCards>
            </section>
        </main>
    );
};

export default LandingPage;
