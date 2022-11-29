import React from "react";
import "./MenuButton.scss";
import SocialButtons from "../SocialButtons/SocialButtons";
import { NavLink } from "react-router-dom";

export default function MenuButton() {
    const [qrActive, setQrActive] = React.useState(false);
    const [checked, setChecked] = React.useState(false);
    const [innerWidth, setInnerWidth] = React.useState(0);

    const inputElement = React.useRef();

    React.useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    function handleResize() {
        if(innerWidth !== window.innerWidth){
            if(window.innerWidth > 1099){
                if(!checked)setQrActive(false);
                setChecked(true);
            }else{
                if(checked)setQrActive(false);
                setChecked(false);
            }
        }
        setInnerWidth(window.innerWidth);
    }

    const linkData = [
        {
            to: "/",
            label: "About Me"
        },
        {
            to: "/studio",
            label: "Studio"
        },
        {
            to: "/news",
            label: "News"
        },
        {
            to: "/cv",
            label: "CV"
        }
    ]
    
    function handleQrClick() {
        setQrActive(!qrActive);
    }
    
    function handlLabelClick() {
        setChecked(!checked);
    }
    
    function handleLinkClick() {
        if(window.innerWidth < 961){
            setChecked(false);
        }
    }

    return (
        <div className="MenuButton">
            <input ref={inputElement}
                className="menu-icon"
                type="checkbox"
                id="menu-icon"
                name="menu-icon"
                checked = {checked}
            />
            <label onClick={handlLabelClick} htmlFor="menu-icon"></label>
            <nav className="nav gradient-border">
                <ul className="pt-5">
                    {linkData.map(link=>
                        <li key={link.to}>
                            <NavLink onClick={handleLinkClick} to={link.to} >{link.label}</NavLink>
                        </li>
                    )}
                    <li>
                        <SocialButtons></SocialButtons>
                    </li>
                    <li className="qrCode">
                        <figure className={qrActive ? "active" : ""} onClick={handleQrClick}></figure>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

