import "./ExhibitCaroussel.scss"

import React from 'react'

export default function ExhibitCaroussel({exhibitFrames}) {
    const [carousselIndex, setCarousselIndex] = React.useState(0);

    function handleClick({currentTarget}){
        setCarousselIndex(currentTarget.dataset.key)
    }

  return (
    <div className="ExhibitCaroussel">
        <div className="pngLights"></div> 
        <div className="bg"
        style={{transform: `translateX(calc(35% - 35% * ${carousselIndex}))`}}>
            {exhibitFrames.map((e, index)=> 
                <section key={index}>
                    <article data-key={index} onClick={handleClick}>
                        {e.element}
                    </article>
                    <figure>
                    </figure>
                </section>    
            )}  
        </div>  
        <div className="floor"></div>  
    </div>
  )
}
