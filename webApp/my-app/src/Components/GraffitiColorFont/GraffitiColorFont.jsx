import "./GraffitiColorFont.scss"
import React from 'react'

export default function GraffitiColorFont({quote}) {
  return (
    <div className="GraffitiColorFont">
        <div className="wrapper">
            <div className="container">
                <h1>{quote}</h1>
            </div>
        </div>
    </div>
  )
}
