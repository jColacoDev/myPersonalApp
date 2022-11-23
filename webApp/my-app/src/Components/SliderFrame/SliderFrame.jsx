import "./SliderFrame.scss"
import React from 'react'

export default function SliderFrame({exhibitFrames}) {
    const [index, setIndex] = React.useState(0);

    const sliderRef = React.useRef();
    const sliderControlRef = React.useRef();

    React.useEffect(() => {
        

    }, []);

    React.useEffect(() => {
        let auxIndex = 0;
        for(let slide of sliderRef.current.querySelectorAll("li")){
            if(index == auxIndex){ 
                slide.classList.add("active");
            }else{
                slide.classList.remove("active");
            }
            auxIndex= auxIndex + 1;
        }

        auxIndex = 0;
        for(let slide of sliderControlRef.current.querySelectorAll("li")){
            if(index == auxIndex){ 
                slide.classList.add("active");
            }else{
                slide.classList.remove("active");
            }
            auxIndex= auxIndex + 1;
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
