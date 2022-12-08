import "./Art3dGallery.scss"
import React from 'react'
import GoldFish from "../GoldFish/GoldFish"
import TicTacToe from "../TicTacToe/TicTacToe";

export default function Art3dGallery({openHackerRoom}) {
    const [wallSelected, setWallSelected] = React.useState("front");

    function onOpenHackerRoom(){
        openHackerRoom();
    }

return (
    <div className="Art3dGallery">
        <input type="checkbox" id="lightswitch" />
        <input type="checkbox" id="wall4" className={wallSelected==="front" ? "checked" : ""}/>

        <label className={wallSelected==="left" ? "active p1hover" : "p1hover"}></label>
        <label className={wallSelected==="back" ? "active p2hover" : "p2hover"}></label>
        <label className={wallSelected==="right" ? "active p3hover" : "p3hover"}></label>

        <div className="z">
        <div className="x">
            <div className="y">
            <div className="floor"></div>
            <div className="ceiling"></div>
            <div className="wall1">
                <div className="painting" onClick={()=> {if(wallSelected !== "left") setWallSelected("left")}}>
                    <span onClick={()=>setWallSelected("front")}></span>
                    <TicTacToe></TicTacToe>
                    <p>
                        Pure CSS Only Portrait<br />
                        Isla<br />
                        <small>Ben ngEvans</small>
                    </p>
                </div>
            </div>
            <div className="wall2">
                <div className="painting" onClick={()=>wallSelected === "" ? setWallSelected("front") : setWallSelected("")}>
                <GoldFish></GoldFish>
                
                </div>
            </div>
            <div className="wall3">
                <div className="painting" onClick={()=>wallSelected === "right" ? setWallSelected("front") : setWallSelected("right")}>
                <img src="https://tinydesign.co.uk/gallery/gallery-img/still-life.jpg" />
                <p>
                    Pure CSS Still Life<br />
                    Water and Lemons<br />
                    <small>Ben Evans</small>
                </p>
                </div>
            </div>
            <div className="wall4">

                <div className="notice">
                    <span>Hack3r Z0n3 is a high Graphic CSS danger Only PC allowed!</span>
                    <span>Click in the paintings to appreciate :D</span>
                    <span>Turn the Switch OFF to save energy.</span>
                </div>
                <div className="door">
                    <span onClick={onOpenHackerRoom}></span>
                </div>

                <label htmlFor="lightswitch" className="pointer" title="Switch"></label>
                <div className="fireexit">
                    <i></i>
                    <i></i>
                    <div>HACKER</div>
                    <div>ZONE</div>
                </div>
            </div>
        </div>
        </div>
        </div>

        <label className="turnback" title="Rotate left" htmlFor="wall4"></label>
    </div>
)}
