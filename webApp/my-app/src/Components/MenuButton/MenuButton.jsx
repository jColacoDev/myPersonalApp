import React, { Component } from "react";
import "./MenuButton.scss";
import SocialButtons from "../SocialButtons/SocialButtons";

export default class MenuButton extends Component {
    render() {
        return (
            <div className="MenuButton">
                <input
                    className="menu-icon"
                    type="checkbox"
                    id="menu-icon"
                    name="menu-icon"
                />
                <label htmlFor="menu-icon"></label>
                <nav className="nav gradient-border">
                    <ul className="pt-5">
                        <li>
                            <a href="#">Work</a>
                        </li>
                        <li>
                            <a href="#">Studio</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">C. Vitae</a>
                        </li>
                        <li>
                            <SocialButtons></SocialButtons>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
