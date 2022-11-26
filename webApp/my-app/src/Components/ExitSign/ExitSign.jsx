import "./ExitSign.scss"

import React from 'react'

export default function ExitSign({right = false, upWord= "", downWord= ""}) {
  return (
    <div className={`ExitSign ${right ? "Right" : ""}`}>
        <div className="sign_board">
        <div className="arrow"></div>
        <div className="door">
            <div className="man">
            <div className="head"></div>
            <div className="torso"></div>
            <div className="hand"></div>
            <div className="hand right"></div>
            <div className="leg"></div>
            <div className="leg right"></div>
            </div>
        </div>
        <div className="text">{upWord}<br />{downWord}</div>
        </div>
    </div>
  )
}
