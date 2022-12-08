import "./News.scss"
import React from 'react'
import PDFmaker from "../../Components/PDFmaker/PDFmaker"
import { Animated } from 'react-animated-css'

export default function News() {
  return (
    <Animated 
        animationIn="fadeIn" 
        animationOut="fadeOut"
    >   
        <div className="News">
            <PDFmaker></PDFmaker>
        </div>
    </Animated>

  )
}
