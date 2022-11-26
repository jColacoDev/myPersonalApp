import "./HauntedHouse.scss"
import React from 'react'

export default function HauntedHouse({escapeClick}) {

    function handleEscapeClick(){
        escapeClick();
    }


  return (
    <div className="HHwrapper">
    <div className="HauntedHouse">
  <div className="scene">
    <div className="floor"></div>
    <div className="cube">
      <div onClick={handleEscapeClick} className="screen1">
        <div className="left"></div>
        <div className="right"></div>
        <div className="front"></div>
        <div className="top"></div>
        <div className="ghost g2">
          <div className="eyeLeft"></div>
          <div className="eyeRight"></div>
          <div className="mouth"></div>
        </div>
      </div>
      <div className="screen2">
        <div className="left"></div>
        <div className="right"></div>
        <div className="front"></div>
        <div className="top"></div>
        <div className="ghost g1">
          <div className="eyeLeft"></div>
          <div className="eyeRight"></div>
          <div className="mouth2"></div>
        </div>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}
