import React, { Component } from "react";
import "./SocialButtons.scss";

export default class SocialButtons extends Component {
    render() {
        return (
            <div className="SocialButtons">
                <ul>
                    <li>
                        <a className="facebook" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i
                                className="fa fa-facebook"
                                aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i
                                className="fa fa-instagram"
                                aria-hidden="true"></i>
                        </a>
                    </li>
                    <li>
                        <a className="google" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i
                                className="fa fa-google-plus"
                                aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
