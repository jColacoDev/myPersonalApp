import React from 'react'
import { useLocation } from "react-router-dom";

import "./StickyNav.scss"
import "../../Animations/underlineText.scss";

export default function StickyNav({pagesData}) {
    const [linkIndex, setLinkIndex] = React.useState(0);
    const location = useLocation();

    React.useLayoutEffect(() => {
        const isThePath = (element) => element.path === location.pathname.substring(1);
        setLinkIndex(pagesData.findIndex(isThePath));
    }, [location]);

    return (
        <nav className="stickyNav hover-underline07">
            {pagesData[linkIndex].navLinks.map((navLink, i)=>
                <a key={i} href={navLink.ref}>{navLink.label}</a>    
            )}
            <figure></figure>
        </nav>
  )
}
