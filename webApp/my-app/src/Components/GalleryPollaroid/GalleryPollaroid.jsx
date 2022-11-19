import React from 'react'
import "./GalleryPollaroid.scss";

export default function GalleryPollaroid() {
    const galleryRef = React.createRef();
    const [active, setActive] = React.useState(false);
    
    React.useEffect(() => {
        if(!active){
            closeModal();
        }
    }, [active]);

    function closeModal(){
        const items =  galleryRef.current.querySelectorAll(".item");
        for(const item of items){
            item.classList.remove("active");
        }
    }

    function handleClick({currentTarget}){        
        currentTarget.classList.add("active");
        setActive(!active);
    }

    const itemsData = [
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/dXAhQuT.jpg",
            caption: "Everything .developer",
            hidden: "lorem12 Everything .developer Everything .developerEverything .developer Everything .developer"
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/LZkivxR.jpg",
            caption: "Time to Give!",
            hidden: "lorem12 Everything .developer Everything .developerEverything .developer Everything .developer"
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/hqcMtrF.jpg",
            caption: "Lights, Camera, Action!",
            hidden: "lorem12 Everything .developer Everything .developerEverything .developer Everything .developer"
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/l867sBU.jpg",
            caption: "I wonder... I wander",
            hidden: "lorem12 Everything .developer Everything .developerEverything .developer Everything .developer"
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/7cQCk5I.jpg",
            caption: "Think Green!",
            hidden: "lorem12 Everything .developer Everything .developerEverything .developer Everything .developer"
        }
    ]

    return (
        <div ref={galleryRef} className="GalleryPollaroid">
            <div className="wrapper">
            {itemsData.map(e=>
                <div onClick={handleClick} className="item">
                    <div className="polaroid">
                        <img src={e.imgSrc} alt={e.caption} />
                        <div className="caption">{e.caption}</div>
                        <section><p>{e.hidden}</p></section>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}
