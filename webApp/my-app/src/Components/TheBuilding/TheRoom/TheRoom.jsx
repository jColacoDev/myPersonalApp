import "./TheRoom.scss"
import React from 'react'
import SliderFrame from "../../SliderFrame/SliderFrame";

import Pikachu from "../../Pikachu/Pikachu"
import Shinchan from "../../Shinchan/Shinchan";
import FloatingSphere from "../../FloatingSphere/FloatingSphere";
import ExitSign from "../../ExitSign/ExitSign";
import HauntedHouse from "../../HauntedHouse/HauntedHouse";
import MysticRoom from "../../MysticRoom/MysticRoom";

export default function TheRoom({changePerspective}) {
    const roomRef = React.useRef();
    const [hauntedDivision, setHauntedDivision] = React.useState(false);
    const [mysticDivision, setMysticDivision] = React.useState(false);

    const [gallery, setGallery] = React.useState([]);
    const [galleryListNumber, setGalleryListNumber] = React.useState(40);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    
    React.useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=2&limit=${galleryListNumber}`)
            .then(async (response) => {
                let data = await response.json();
                setGallery(data);
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
            })
            .catch((error) => {
                console.error(`There was an error`, error);
        });
    }, [galleryListNumber]);


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

    let loremPics = [];
    gallery.map((pic)=> loremPics.push({
        element: <figure><img src={pic.download_url} alt="" /></figure>
    }))
    
    function calculatePerspective(elementPosition){

        let perspectivePercent = 50 - (elementPosition / window.innerHeight * 50);
        if(perspectivePercent < 0) perspectivePercent = 0;
        if(perspectivePercent > 100) perspectivePercent = 100;

        return perspectivePercent;
    }
    
    function handleMiddleClick() {
        let room=  roomRef.current.querySelector(".room");
        room.classList.remove("RightSide");
        room.classList.remove("LeftSide");
    }
    function handleRightClick() {
        let room=  roomRef.current.querySelector(".room");
        room.classList.remove("LeftSide");
        room.classList.add("RightSide");
    }
    function handleLeftClick() {
        let room=  roomRef.current.querySelector(".room");
        room.classList.remove("RightSide");
        room.classList.add("LeftSide");
    }
    function handleScroll() {
        if(changePerspective){
            let room=  roomRef.current.querySelector(".room");
            room.style.perspectiveOrigin= `50% ${calculatePerspective(room.getBoundingClientRect().top)}%`;
        }
    }
    function openHauntedHause() {
        setHauntedDivision(true);
    }
    function openMysticRoom() {
        setMysticDivision(true);
    }
    function onEscapeClick(){
        setHauntedDivision(false);
        setMysticDivision(false);
    }

    return (
        <div ref={roomRef} className="TheRoom">
            <section className="room">
                <div className="room-walls"></div>
                <div onClick={openMysticRoom} className="doorDecor right"></div>
                <div onClick={openHauntedHause} className="doorDecor left"></div>
                <div className="frontWall_decor">
                    <SliderFrame autoPlay={3500} exhibitFrames={loremPics}></SliderFrame>
                    <div className="signs">
                        <button className="infoSign" onClick={handleMiddleClick}><span>Gallery</span></button>
                        <button onClick={handleRightClick}><ExitSign upWord="Mystic" downWord="Room" right={true}></ExitSign></button>
                        <button onClick={handleLeftClick}><ExitSign upWord="Haunted" downWord="Room" ></ExitSign></button>
                    </div>
                    <SliderFrame exhibitFrames={exhibitFrames}></SliderFrame>
                </div>
            </section>
                {hauntedDivision && 
            <section className="doorDivisions">
                    <HauntedHouse escapeClick={onEscapeClick}></HauntedHouse>
            </section>
                }
                {mysticDivision && 
            <section className="doorDivisions">
                    <MysticRoom escapeClick={onEscapeClick}></MysticRoom>
            </section>
                }
        </div>
    )
}
