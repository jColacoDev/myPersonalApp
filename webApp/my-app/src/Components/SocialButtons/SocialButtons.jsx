import React, { Component } from "react";
import "./SocialButtons.scss";

export default class SocialButtons extends Component {
    render() {
        return (
            <div className="SocialButtons">
                <ul>
                    <li>
                        <a className="linkdin" href="https://www.linkedin.com/in/jcolacodev/" target="_blank" rel="noreferrer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <figure></figure>
                        </a>
                    </li>
                    <li>
                        <a className="github" href="https://github.com/jColacoDev" target="_blank" rel="noreferrer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <figure></figure>
                        </a>
                    </li>
                    <li>
                        <a className="codepen" href="https://codepen.io/jcolacodev" target="_blank" rel="noreferrer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <figure></figure>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="https://www.instagram.com/jocolaco/" target="_blank" rel="noreferrer">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <figure></figure>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
