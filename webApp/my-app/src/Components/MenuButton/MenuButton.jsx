import React, { Component } from "react";
import "./MenuButton.scss";
import SocialButtons from "../SocialButtons/SocialButtons";
import { NavLink } from "react-router-dom";

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
                            <NavLink to={`/`} activeClassName="active">About Me</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/1`} activeClassName="active">Studio</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/2`} activeClassName="active">News</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/cv`} activeClassName="active">C. Vitae</NavLink>
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
