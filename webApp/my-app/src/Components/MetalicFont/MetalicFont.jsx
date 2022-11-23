import React from 'react'
import "./MetalicFont.scss"

export default function MetalicFont({children}) {
    return (
        <div className='MetalicFont'>
            <div className="bg"> {children} </div>
            <div className="fg"> {children} </div>
        </div>
    )
}
