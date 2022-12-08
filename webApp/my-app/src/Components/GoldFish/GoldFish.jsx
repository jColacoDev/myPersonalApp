import React from 'react'
import "./GoldFish.scss"

export default function GoldFish() {
  return (
<div className='GoldFish'>
    <div className="fish-wrapper" style={{animationPlayState:" running !important"}}>
    <div className="fish-container">
        <div className="fish-parts">
        <div className="fish-body front" style={{animationPlayState:" running !important"}}></div>
        <div className="fish-body back" style={{animationPlayState:" running !important"}}></div>
        <div className="fish-back-bottom-fin front" style={{animationPlayState:" running !important"}}></div>
        <div className="fish-back-bottom-fin back" style={{animationPlayState:" running !important"}}></div>
        <div className="fish-back-fin" style={{animationPlayState:" running !important"}}></div>
        <div className="fish-front-bottom-fin front" style={{animationPlayState:" running !important"}}></div>
        <div className="fish-front-bottom-fin back" style={{animationPlayState:" running !important"}}></div>
        <div className="fish-top-fin" style={{animationPlayState:" running !important"}}></div>
        </div>
    </div>
    </div>
</div>
  )
}
