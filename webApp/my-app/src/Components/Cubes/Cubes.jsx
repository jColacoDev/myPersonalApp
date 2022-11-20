import React from "react";
import "./Cubes.scss";
import NavigationDotted from "../NavigationDotted/NavigationDotted";

export default function Cubes() {
    const [navSel, setNavSel] = React.useState(0);

    const cssSel = ["", "first", "second", "third"];
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
        <div className="Cubes">
            <NavigationDotted handleClick={handleClick}></NavigationDotted>
            <section className="cubes-container">

                {booksData.map((e,i)=>
                <article className="cubeData">
                    <div className="cube-container">
                        <div className={`photo-cube ${cssSel[navSel]}`}>
                            <img className="front" src={data[0][i].imgSrc} alt={data[0][i].title} />
                            <img className="left"  src={data[1][i].imgSrc} alt={data[1][i].title} />
                            <img className="right" src={data[2][i].imgSrc} alt={data[2][i].title} />
                            <img className="back"  src={data[3][i].imgSrc} alt={data[3][i].title} />
                        </div>
                    </div>

                    <section>
                        <h1>{data[navSel][i].title}</h1>
                        <p>by {data[navSel][i].creator}</p>
                        <span>{data[navSel][i].date}</span>
                    </section>
                </article>
                )}
            </section>
        </div>
    );
}
