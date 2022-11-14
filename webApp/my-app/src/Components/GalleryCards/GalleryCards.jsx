import React from "react";
import NavigationDotted from "../NavigationDotted/NavigationDotted";
import "./GalleryCards.scss";

export default function GalleryCards() {
    const [navSel, setNavSel] = React.useState(0);
    
    const booksData = [
        {
            imgSrc: require("./imgs/siddartha.jpg"),
            title: "Siddhartha",
            creator: "Hermann Hesse",
            date: 1922
        },
        {
            imgSrc: require("./imgs/milan.jpg"),
            title: "Unbearable Lightness of Being",
            creator: "Milan Kundera",
            date: 1984
        },
        {
            imgSrc: require("./imgs/dorian.jpg"),
            title: "Picture of Dorian Gray",
            creator: "Oscar Wilde",
            date: 1890
        }
    ];
    const moviesData = [
        {
            imgSrc: require("./imgs/eternalSunshine.jpg"),
            title: "Eternal Sunshine of the Spotless Mind",
            creator: "Jim Carrey",
            date: 2004
        },
        {
            imgSrc: require("./imgs/vitaBella.jpg"),
            title: "La Vita è Bella",
            creator: "Roberto Benigni",
            date: 1999
        },
        {
            imgSrc: require("./imgs/benHur.jpg"),
            title: "Ben-Hur",
            creator: "Lew Wallace",
            date: 1959
        }
    ];
    const musicData = [
        {
            imgSrc: require("./imgs/gorillaz.jfif"),
            title: "Gorillaz",
            creator: "electronic",
            date: 1998
        },
        {
            imgSrc: require("./imgs/queen.jpg"),
            title: "Queen",
            creator: "Rock n'Roll",
            date: 1970
        },
        {
            imgSrc: require("./imgs/manu.jpg"),
            title: "Manu Chao",
            creator: "Alternative SKA",
            date: 1987
        }
    ];
    const placesData = [
        {
            imgSrc: require("./imgs/natural.jpg"),
            title: "Nature",
            creator: "everywhere",
            date: "nowhere"
        },
        {
            imgSrc: require("./imgs/festival.jpg"),
            title: "Festival",
            creator: "music",
            date: "camping"
        },
        {
            imgSrc: require("./imgs/workshop.jpg"),
            title: "Workshop",
            creator: "developing",
            date: "creating"
        }
    ];

    const data = [
        booksData,
        moviesData,
        musicData,
        placesData
    ]
    const handleClick = num => {
        setNavSel(num);
      };

    return (
        <div className="GalleryCards">
            <NavigationDotted handleClick={handleClick}></NavigationDotted>
            <section>
                <figure className="snip1113 red">
                    <img
                        src={data[navSel][0].imgSrc}
                        alt={data[navSel][0].title}
                    />
                    <figcaption>
                        <h3>
                        {data[navSel][0].title} <span>{data[navSel][0].creator}</span>
                        </h3>
                        <h4>{data[navSel][0].date}</h4>
                    </figcaption>
                </figure>
                <figure className="snip1113 blue hover">
                    <img
                        src={data[navSel][1].imgSrc}
                        alt={data[navSel][1].title}
                    />
                    <figcaption>
                        <h3>
                        {data[navSel][1].title} <span>{data[navSel][1].creator}</span>
                        </h3>
                        <h4>{data[navSel][1].date}</h4>
                    </figcaption>
                </figure>
                <figure className="snip1113">
                    <img
                        src= {data[navSel][2].imgSrc}
                        alt={data[navSel][2].title}
                    />
                    <figcaption>
                        <h3>
                        {data[navSel][2].title} <span>{data[navSel][2].creator}</span>
                        </h3>
                        <h4>{data[navSel][2].date}</h4>
                    </figcaption>
                </figure>
            </section>
        </div>
    );
}
