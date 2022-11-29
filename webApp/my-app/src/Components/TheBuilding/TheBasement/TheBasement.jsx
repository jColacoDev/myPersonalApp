import "./TheBasement.scss"
import React from 'react'
import Art3dGallery from "../../Art3dGallery/Art3dGallery"
import Computer3d from "../../Computer3d/Computer3d"
import WIndows98 from "../../WIndows98/WIndows98"

export default function TheBasement() {
    const [hackerDivision, setHackerDivision] = React.useState(false);
    const [windows98Division, setWindows98Division] = React.useState(false);
    
    const basementRef = React.useRef();

    function fadeAnimation(){
        basementRef.current.classList.add("fadeOut");
        setTimeout(() => {
            basementRef.current.classList.remove("fadeOut");
        }, "1000")
    }
    function onEscapeBasementClick(){
        fadeAnimation();

        setTimeout(() => {
            setDivisionsOFF();
        }, "1000");
    }
    function setDivisionsOFF(){
        setHackerDivision(false);
    }

    function onOpenHackerRoom() {
        fadeAnimation();

        setTimeout(() => {
            setHackerDivision(true);
        }, "1000");
    }
    function onOpenWindowsClick() {
        fadeAnimation();

        setTimeout(() => {
            setWindows98Division(true);
        }, "1000");
    }
    function onEscapeWindowsClick() {
        fadeAnimation();

        setTimeout(() => {
            setWindows98Division(false);
        }, "1000")
    }

return (
<div ref={basementRef} className="TheBasement">
    {hackerDivision && 
        <section className="doorDivisions">
                <Computer3d escapeClick={onEscapeBasementClick} windowsClick={onOpenWindowsClick}></Computer3d>
        </section>
    }
    {windows98Division && 
        <section className="doorDivisions">
                <Computer3d escapeClick={onEscapeBasementClick} windowsClick={onOpenWindowsClick}></Computer3d>
                    <WIndows98 escapeClick={onEscapeWindowsClick}></WIndows98>
        </section>
    }
    <Art3dGallery openHackerRoom={onOpenHackerRoom}></Art3dGallery>
</div>
)}
