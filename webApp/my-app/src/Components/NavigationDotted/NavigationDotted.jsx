import React from 'react'
import { Link } from "react-router-dom";
import "./NavigationDotted.scss";
import MetalicFont from '../MetalicFont/MetalicFont';
export default function NavigationDotted({handleClick}) {

    function handleLinkClick(event){
        handleClick(event.currentTarget.dataset.index);
        event.preventDefault();

        const links = event.currentTarget.parentElement.querySelectorAll("a");
        for(const link of links){
            link.classList.remove("active");
        }
        event.currentTarget.classList.add("active");

    }

    return (
        <nav className="NavigationDotted">
            <Link className='active' data-index={0} onClick={handleLinkClick}><MetalicFont>Books</MetalicFont></Link>
            <Link data-index={1} onClick={handleLinkClick}><MetalicFont>Movies</MetalicFont></Link>
            <Link data-index={2} onClick={handleLinkClick}><MetalicFont>Music</MetalicFont> </Link>
            <Link data-index={3} onClick={handleLinkClick}><MetalicFont>Places</MetalicFont></Link>
            <div className="dot"></div>
        </nav>
    )
}