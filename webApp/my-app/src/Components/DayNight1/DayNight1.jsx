import React, { useState, useEffect } from "react";
import "./DayNight1.scss";

export default function DayNight1({ theme }) {
    const [starsShadow, setStarsShadow] = useState(generateStarShadows());

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    },[]);
    
    function handleResize() {
        setStarsShadow(generateStarShadows());
    }

    function generateStarShadows() {
        const STAR_COUNT = (window.innerWidth * window.innerHeight) / 1000;

        let result = "";
        for (let i = 0; i < STAR_COUNT; i++) {
            result += `${randomNumber(-100, 100)}vw ${randomNumber(
                -200,
                200
            )}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`;
        }

        return result.substring(0, result.length - 1);
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <div className={"DayNight1 " + theme}>
            <div className="wrapper">
                <div className="container">
                    <div className="glow"></div>
                    <div
                        className="stars"
                        style={{ boxShadow: starsShadow }}></div>
                    <div className="spinner">
                        <div className="sun">
                            <div className="ray1"></div>
                            <div className="ray2"></div>
                            <div className="ray3"></div>
                            <div className="ray4"></div>
                        </div>
                        <div className="moon">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
