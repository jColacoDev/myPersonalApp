import "./TheBasement.scss"
import React from 'react'
import Art3dGallery from "../../Art3dGallery/Art3dGallery"
import Computer3d from "../../Computer3d/Computer3d"
import WIndows98 from "../../WIndows98/WIndows98"

export default function TheBasement() {
    const [hackerDivision, setHackerDivision] = React.useState(true);
    
    function onOpenHackerRoom() {
        setHackerDivision(true);
    }
    function onEscapeClick(){
        setHackerDivision(false);
    }

return (
<div className="TheBasement">
    {hackerDivision && 
        <section className="doorDivisions">
                <Computer3d escapeClick={onEscapeClick}></Computer3d>
        </section>
    }
    <Art3dGallery openHackerRoom={onOpenHackerRoom}></Art3dGallery>
    {/* <WIndows98></WIndows98> */}
</div>
)}
