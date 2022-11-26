import "./MysticRoom.scss"
import React from 'react'

export default function MysticRoom({escapeClick}) {

    function handleEscapeClick(){
        escapeClick();
    }
  return (
    <div className="MysticRoom">
        <div id = "room">  
            <div className="pattern-tower"></div>
            <div className="shrine"> 
                <div className="box" onClick={handleEscapeClick}>
                    <div className="wall"></div>
                    <div className="wall"></div>
                    <div className="wall"></div>
                    <div className="wall"></div>
                    <div className="wall"></div>
                    <div className="wall"></div>
                </div>
                <div className="base-container">
                    <div className="base"></div>
                    <div className="top-base"></div>
                </div>
            </div>
            <div className="left-tower tower"></div>
            <div className="right-tower tower"></div>
            <div className="ceiling-decor"></div>
            <div className="shadow"></div>
            </div>
    </div>
  )
}
