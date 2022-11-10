import React from "react";
import { Link } from "react-router-dom";
import "./GalleryCards.scss";

export default function GalleryCards() {
    return (
        <div className="GalleryCards">
            <div>
                <h1>These are a few of my favorite things</h1>
                <ul>
                    <li className="hover-underline07"><Link>Books</Link></li>
                    <li className="hover-underline07"><Link>Movies</Link></li>
                    <li className="hover-underline07"><Link>Hobbies</Link></li>
                    <li className="hover-underline07"><Link>Quotes</Link></li>
                    <li className="hover-underline07"><Link>Places</Link></li>
                </ul>
            </div>
            <section>
                <figure className="snip1113 red">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample1.jpg"
                        alt="pr-sample1"
                    />
                    <figcaption>
                        <h3>
                            Roberto <span>Alvarez</span>
                        </h3>
                        <h4>Creator</h4>
                    </figcaption>
                </figure>
                <figure className="snip1113 blue hover">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample3.jpg"
                        alt="pr-sample3"
                    />
                    <figcaption>
                        <h3>
                            Joshua <span>Franklin</span>
                        </h3>
                        <h4>Creator</h4>
                    </figcaption>
                </figure>
                <figure className="snip1113">
                    <img
                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample9.jpg"
                        alt="pr-sample9"
                    />
                    <figcaption>
                        <h3>
                            Dalene <span>Atkinson</span>
                        </h3>
                        <h4>Creator</h4>
                    </figcaption>
                </figure>
            </section>
        </div>
    );
}
