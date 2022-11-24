import "./SliderFrame.scss"
import React from 'react'

export default function SliderFrame({exhibitFrames, autoPlay = [false, 1500]}) {
    const [index, setIndex] = React.useState(0);

    const sliderRef = React.useRef();
    const sliderControlRef = React.useRef();

    React.useEffect(() => {


    }, []);

    React.useEffect(() => {
        let auxIndex = 0;
        const slider = sliderRef.current.querySelectorAll("li");
        const sliderControl = sliderControlRef.current.querySelectorAll("li");

        for(let slide of slider){
            if(index == auxIndex){ 
                slide.classList.add("active");
            }else{
                slide.classList.remove("active");
            }
            auxIndex= auxIndex + 1;
        }
        auxIndex = 0;
        for(let slide of sliderControl){
            if(index == auxIndex){ 
                slide.classList.add("active");
            }else{
                slide.classList.remove("active");
            }
            auxIndex= auxIndex + 1;
        }
        if(autoPlay[0]){
            const timer = setTimeout(() => {
                if(index >= auxIndex - 1) setIndex(0);
                else setIndex(index + 1);
                
            }, autoPlay[1]);
            return () => clearTimeout(timer);
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
        <section className="sliderControl">
            <ul ref={sliderControlRef}>
                {exhibitFrames.map((frame, i) =>
                    <li key={i} data-index={i}
                        onClick={handleControlClick}>
                    </li>
                )}
            </ul>
        </section>
    </div>
  )
}
