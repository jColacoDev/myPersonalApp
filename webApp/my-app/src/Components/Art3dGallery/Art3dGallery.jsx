import "./Art3dGallery.scss"
import React from 'react'
import GoldFish from "../GoldFish/GoldFish"
export default function Art3dGallery() {
    const [wallSelected, setWallSelected] = React.useState("front");

    
  return (
<div className="Art3dGallery">
    <input type="checkbox" id="lightswitch" />
    <input type="checkbox" id="wall4" className={wallSelected==="front" ? "checked" : ""}/>

    <label className={wallSelected==="left" ? "active p1hover" : "p1hover"}></label>
    <label className={wallSelected==="back" ? "active p2hover" : "p2hover"}></label>
    <label className={wallSelected==="right" ? "active p3hover" : "p3hover"}></label>

    <z>
    <x>
        <y>
        <floor></floor>
        <ceiling></ceiling>
        <wall1>
            <painting>
            <img src="https://tinydesign.co.uk/gallery/gallery-img/portrait.jpg" />
            <p>
                Pure CSS Only Portrait<br />
                Isla<br />
                <small>Ben ngEvans</small>
            </p>
            </painting>
        </wall1>
        <wall2>
            <painting>
            <GoldFish></GoldFish>
            
            </painting>
        </wall2>
        <wall3>
            <painting>
            <img src="https://tinydesign.co.uk/gallery/gallery-img/still-life.jpg" />
            <p>
                Pure CSS Still Life<br />
                Water and Lemons<br />
                <small>Ben Evans</small>
            </p>
            </painting>
        </wall3>
        <wall4>

            <notice>

            <a title="Buy the landscape - CSS Art for your wall!" target="_blank" href="https://www.redbubble.com/i/canvas-print/Pure-CSS-Landscape-An-Evening-in-Southwold-by-Ivorjetski/48823594.4ZB30">Buy the landscape</a>
            <a title="Buy the still life - CSS Art for your wall!" target="_blank" href="https://www.redbubble.com/i/canvas-print/Pure-CSS-Still-Life-Water-and-Lemons-by-Ivorjetski/48862524.4ZB30">Buy the still life</a>
            <a title="Buy the portrait - CSS Art for your wall!" target="_blank" href="https://www.redbubble.com/i/framed-print/Pure-CSS-Portrait-Isla-by-Ivorjetski/48862324.16RW4">Buy the portrait</a>
            </notice>
            <door>
            <a target="_blank" title="Exit" href="https://codepen.io/ivorjetski">
            </a>
            </door>

            <label for="lightswitch" className="pointer" title="Switch"></label>
            <fireexit>
            <i></i>
            <i></i>
            </fireexit>
        </wall4>
        </y>
    </x>
    </z>

    <label className="turnback" title="Rotate left" for="wall4"></label>
</div>
  )
}
