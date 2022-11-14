import React from 'react'
import { Link } from "react-router-dom";
import "./NavigationDotted.scss";

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
            <Link className='active' data-index={0} onClick={handleLinkClick}>Books</Link>
            <Link data-index={1} onClick={handleLinkClick}>Movies</Link>
            <Link data-index={2} onClick={handleLinkClick}>Music </Link>
            <Link data-index={3} onClick={handleLinkClick}>Places</Link>
            <div className="dot"></div>
        </nav>
    )
}