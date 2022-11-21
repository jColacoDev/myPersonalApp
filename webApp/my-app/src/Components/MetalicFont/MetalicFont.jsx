import React from 'react'
import "./MetalicFont.scss"

export default function MetalicFont({children}) {
    return (
        <div className='MetalicFont'>
            <div class="bg"> {children} </div>
            <div class="fg"> {children} </div>
        </div>
    )
}
