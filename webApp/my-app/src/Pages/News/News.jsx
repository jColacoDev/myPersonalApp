import "./News.scss"
import React from 'react'
import { Animated } from 'react-animated-css'
import NeonScroll from "../../Components/NeonScroll/NeonScroll"

export default function News() {
  return (
    <Animated 
        animationIn="fadeIn" 
        animationOut="fadeOut"
    >   
        <div className="News">
            <NeonScroll></NeonScroll>
        </div>
    </Animated>

  )
}
