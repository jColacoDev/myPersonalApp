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
            hidden: [
                        "To develop is to start, grow, evolve, mature and succeed.",
                        "We develop relationships, projects, tastes and ourselves everyday by doing what we do with passion.",
                        "A developer is a problem solver always updated. As a developer programming teaches a perspective on how to divide and conquer issues.",
                        "Professionally I develop Web Apps focusing Frontend."
                    ]
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/LZkivxR.jpg",
            caption: "Time to Give!",
            hidden: [
                        "Our life is our time, the greatest gift we can give is our time, our life.",
                        "I am an active blood donor and I'm always up to participate in volunteering programs and community initiatives.",
                        "Lately I've helped painting and making a school playground safer for kids =)",
                        "I've been in help Ukraine campaigns, Walk dogs @ dog kennel",
                        "Up next I'm enlisting at Cycling Without Age movement! =D",
                    ]
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/hqcMtrF.jpg",
            caption: "Lights, Camera, Action!",
            hidden: [
                        "In a world where everyone can take a picture, take a picture with story.",
                        "Capturing moments takes a lot of perspectives, shadows and lights, looking at the world as such is much more interesting!",
                        "I do image and film editing to create memorable pieces!",
                        "I focus on transitions and content with the help of a hand gimbal and a drone."
                    ]
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/l867sBU.jpg",
            caption: "I wander... I wonder",
            hidden: [
                    "Wander Often ",
                    "Always Wonder",
                    "",
                ]
        },
        {
            imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/7cQCk5I.jpg",
            caption: "Think Green!",
            hidden: [
                        "I value as sacred the 3 R's', no trowing garbage to the ground and waste planning.",
                        "I always stand for the environment, I understand the need to change habits, food, clothes, water, plastic, CO2 and all others, bearing in mind the sustainability and the ecological footprint",
                        "When walking by the beach I often bring a bag to clean my way through.",
                    ]
        }
    ]

    return (
        <div ref={galleryRef} className="GalleryPollaroid">
            <div className="wrapper">
            {itemsData.map((itemData, index)=>
                <div key={index} onClick={handleClick} className="item">
                    <div className="polaroid">
                        <img src={itemData.imgSrc} alt={itemData.caption} />
                        <div className="caption">{itemData.caption}</div>
                        <section>
                        {itemData.hidden.map((element, index2) => 
                            <p  key={index2}>{element}</p>
                        )}
                        </section>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}
