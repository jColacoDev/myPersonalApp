import "./SliderFrame.scss"
import React from 'react'

export default function SliderFrame({exhibitFrames = [], controls = false, autoPlay = -1}) {
    const [index, setIndex] = React.useState(0);

    const sliderRef = React.useRef();
    const sliderControlRef = React.useRef();

    React.useEffect(() => {
        setIndex(0)
    }, []);

    React.useEffect(() => {
        let auxIndex = 0;
        const slider = sliderRef?.current.querySelectorAll("li");
        for(let slide of slider){
            if(index === auxIndex){ 
                slide.classList.add("active");
            }else{
                slide.classList.remove("active");
            }
            auxIndex= auxIndex + 1;
        }
        
        if(exhibitFrames.length > 1){

            if(controls){
                const sliderControl = sliderControlRef.current.querySelectorAll("li");
                auxIndex = 0;
                for(let slide of sliderControl){
                    if(index == auxIndex){ 
                        slide.classList.add("active");
                    }else{
                        slide.classList.remove("active");
                    }
                    auxIndex= auxIndex + 1;
                }
            }

            if(autoPlay !== -1){
                const timer = setTimeout(() => {
                    if(index >= auxIndex - 1) setIndex(0);
                    else setIndex(index + 1);
                    
                }, autoPlay);
                return () => clearTimeout(timer);
            }
        }
    }, [index]);
    
    function handleControlClick({currentTarget}){
        setIndex(currentTarget.dataset.index);
    }

  return (
    <div className="SliderFrame">
        <ul ref={sliderRef} className="slider">
            {exhibitFrames.map((frame, i) =>
                <li key={i} data-index={i}>
                    {frame.element}
                </li>
            )}
        </ul>
        {(exhibitFrames.length > 1  && controls) &&
            <section className="sliderControl">
                <ul ref={sliderControlRef}>
                    {exhibitFrames.map((frame, i) =>
                        <li key={i} data-index={i}
                            onClick={handleControlClick}>
                        </li>
                    )}
                </ul>
            </section>
        } 
    </div>
  )
}
