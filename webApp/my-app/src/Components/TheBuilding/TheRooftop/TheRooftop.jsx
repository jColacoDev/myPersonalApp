import "./TheRooftop.scss"
import React from 'react'
import SliderFrame from "../../SliderFrame/SliderFrame";

import Pikachu from "../../Pikachu/Pikachu"
import Shinchan from "../../Shinchan/Shinchan";
import FloatingSphere from "../../FloatingSphere/FloatingSphere";
import LightSwitch from "../../LightSwitch/LightSwitch";
import { useSelector } from "react-redux";

export default function TheRooftop() {
    const roomRef = React.useRef();
    const sunset = useSelector((state) => state.sunset);


    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        handleClick();
    }, [sunset]);

    const exhibitFrames = [
        {
            element: <img src={require("./mySunshine.png")} />,
        }
    ];

    function calculatePerspective(elementPosition){

        let perspectivePercent = 50 - (elementPosition / window.innerHeight * 50);
        if(perspectivePercent < 0) perspectivePercent = 0;
        if(perspectivePercent > 100) perspectivePercent = 100;

        return perspectivePercent;
    }
    
    function handleScroll() {
        let room=  roomRef.current.querySelector(".room");
        room.style.perspectiveOrigin= `50% ${calculatePerspective(room.getBoundingClientRect().top)}%`;
    }

    function handleClick(){
        let room=  roomRef.current.querySelector(".room");
        room.classList.add("sceneRotate");
        setTimeout(()=> room.classList.remove("sceneRotate"), 16000);
    }

    return (
        <div ref={roomRef} className="TheRooftop">
            <section className={`room`}>
                <div className="room-walls"></div>
                <div className={`frontWall_decor ${sunset ? "dark" : ""}`}>
                    <SliderFrame exhibitFrames={exhibitFrames}></SliderFrame>
                    <div className="twoGuys"></div>
                </div>
                <div className="middleWall_decor">
                    <div className="twoGirls"></div>
                    <div className="pointingGirl"></div>
                    <div className="falling"></div>
                </div>
                <div className="backWall_decor">
                    <div className="picnic"></div>
                </div>
            <LightSwitch></LightSwitch>
            </section>
        </div>
    )
}
