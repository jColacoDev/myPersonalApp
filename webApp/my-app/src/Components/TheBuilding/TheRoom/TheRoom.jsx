import "./TheRoom.scss"
import React from 'react'
import SliderFrame from "../../SliderFrame/SliderFrame";

import Pikachu from "../../Pikachu/Pikachu"
import Shinchan from "../../Shinchan/Shinchan";
import FloatingSphere from "../../FloatingSphere/FloatingSphere";


export default function TheRoom() {
    const roomRef = React.useRef();

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const exhibitFrames = [
        {
            element: <Pikachu />,
        },
        {
            element: <Shinchan />,
        },
        {
            element: <FloatingSphere />,
        }
    ];

    function calculatePerspective(elementPosition){

        let perspectivePercent = 50 - (elementPosition / window.innerHeight * 50);
        if(perspectivePercent < 0) perspectivePercent = 0;
        if(perspectivePercent > 100) perspectivePercent = 100;

        return perspectivePercent;
    }
    
    function handleScroll() {

        for(let room of roomRef.current.querySelectorAll(".room")){
            room.style.perspectiveOrigin= `50% ${calculatePerspective(room.getBoundingClientRect().top)}%`;
        }
    }

    return (
        <div ref={roomRef} className="TheRoom">
            <section className="room">
                <div className="room-walls"></div>
                <div className="frontWall_decor">
                    <SliderFrame autoPlay={[true, 3500]} exhibitFrames={exhibitFrames}></SliderFrame>
                    <SliderFrame exhibitFrames={exhibitFrames}></SliderFrame>
                </div>
            </section>
        </div>
    )
}
