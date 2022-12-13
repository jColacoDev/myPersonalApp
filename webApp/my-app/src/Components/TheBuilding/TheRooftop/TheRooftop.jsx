import "./TheRooftop.scss"
import React from 'react'
import SliderFrame from "../../SliderFrame/SliderFrame";
import { useSelector } from "react-redux";
import useDidUpdateEffect from "../../../Hooks/useDidUpdateEffect";

export default function TheRooftop({changePerspective}) {
    const roomRef = React.useRef();
    const sunset = useSelector((state) => state.sunset);
    const [timer, setTimer] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        setTimeout(() => {
            setTimer(true);
          }, 3000)
    }, []);

    useDidUpdateEffect(() => {
        if(timer) handleClick();
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
        if(changePerspective){
            let room=  roomRef.current.querySelector(".room");
            room.style.perspectiveOrigin= `50% ${calculatePerspective(room.getBoundingClientRect().top)}%`;
        }
    }

    function handleClick(){
        let room = roomRef.current.querySelector(".room");
        room.classList.add("sceneRotateSunset");
        setTimeout(()=> room.classList.remove("sceneRotateSunset"), 16000);
    }

    return (
        <div id="rooftop" ref={roomRef} className={`TheRooftop ${sunset ? "dark" : ""}`}>
            <section className={`room ${sunset ? "dark" : ""}`}>
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
            </section>
        </div>
    )
}
