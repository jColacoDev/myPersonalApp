import React, { Component } from "react";
import "./GalleryPollaroid.scss";

export default class GalleryPollaroid extends Component {
    render() {
        return (
            <div className="GalleryPollaroid">
                <div className="wrapper">
                    <div className="item">
                        <div className="polaroid">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/dXAhQuT.jpg" />
                            <div className="caption">Everything .developer</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="polaroid">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/LZkivxR.jpg" />
                            <div className="caption">Time to Give!</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="polaroid">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/hqcMtrF.jpg" />
                            <div className="caption">
                                Lights, Camera, Action!
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="polaroid">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/l867sBU.jpg" />
                            <div className="caption">I wonder... I wander</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="polaroid">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/7cQCk5I.jpg" />
                            <div className="caption">Think Green!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
