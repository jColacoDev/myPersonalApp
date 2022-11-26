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
    const [perspectiveObject, setPerspectiveObject] = React.useState("Origin");
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
        removeALLperspective();

        switch (perspectiveObject) {
            case 'Origin':
                room.classList.add("Zoomed");
                setPerspectiveObject("Zoomed");
                break;
            default:{
                perspectiveOrigin();
            }
        }
    }
    function handleLeftSliderClick(){
        let room=  roomRef.current.querySelector(".room");
        removeALLperspective();
        switch (perspectiveObject) {
            case 'LeftSlider':
                perspectiveOrigin();
                break;
            default:{
                room.classList.add("Zoomed");
                room.classList.add("LeftSlider");
                setPerspectiveObject("LeftSlider");
            }
        }
    }
    function handleRightSliderClick(){
        let room=  roomRef.current.querySelector(".room");
        removeALLperspective();
        switch (perspectiveObject) {
            case 'RightSlider':
                perspectiveOrigin();
                break;
            default:{
                room.classList.add("Zoomed");
                room.classList.add("RightSlider");
                setPerspectiveObject("RightSlider");
            }
            }
    }

    function removeALLperspective() {
        let room=  roomRef.current.querySelector(".room");
        room.classList = "room";
    }

    function perspectiveOrigin() {
        setPerspectiveObject("Origin");
    }

    function handleRightClick() {
        let room=  roomRef.current.querySelector(".room");
        room.classList.remove("LeftSide");
        room.classList.add("RightSide");
        setPerspectiveObject("MysticRoom");

    }
    function handleLeftClick() {
        let room=  roomRef.current.querySelector(".room");
        room.classList.remove("RightSide");
        room.classList.add("LeftSide");
        setPerspectiveObject("HauntedRoom");

    }
    function handleScroll() {
        let room=  roomRef.current.querySelector(".room");
        if(changePerspective){
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
                    <div onClick={handleLeftSliderClick}>
                        <SliderFrame autoPlay={3500} exhibitFrames={loremPics}></SliderFrame>
                    </div>
                    <div className="signs">
                        <button className="infoSign" onClick={handleMiddleClick}><span>Gallery</span></button>
                        <button onClick={handleRightClick}><ExitSign upWord="Mystic" downWord="Room" right={true}></ExitSign></button>
                        <button onClick={handleLeftClick}><ExitSign upWord="Haunted" downWord="Room" ></ExitSign></button>
                    </div>
                    <div onClick={handleRightSliderClick}>
                        <SliderFrame exhibitFrames={exhibitFrames}></SliderFrame>
                    </div>
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
