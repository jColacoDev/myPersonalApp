import React, { Component } from "react";
import "./CanvasPortrait.scss";

export default class CanvasPortrait extends Component {
    render() {
        return (
            <div className="CanvasPortrait">
                <div className="example">
                    <div className="block">
                        <div className="side -main"></div>
                        <div className="side -left"></div>
                    </div>
                    <div className="block">
                        <div className="side -main"></div>
                        <div className="side -left"></div>
                    </div>
                    <div className="block">
                        <div className="side -main"></div>
                        <div className="side -left"></div>
                    </div>
                </div>
            </div>
        );
    }
}
