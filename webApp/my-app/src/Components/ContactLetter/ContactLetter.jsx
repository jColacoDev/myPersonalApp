import "./ContactLetter.scss";
import React, { useState } from "react";

export default function ContactLetter() {
    const [sentClass, setSentClass] = useState("");

    function toggleLetter() {
        if (sentClass === "sent") {
            setSentClass("");
        } else {
            setSentClass("sent");
        }
    }

    return (
        <div className={`ContactLetter ${sentClass}`}>
            <div className="wrapper">
                <article className="letter">
                    <div className="side">
                        <h1>Contact me</h1>
                        <textarea placeholder="Your message"></textarea>
                    </div>
                    <div className="side">
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Your email" />
                        <button onClick={toggleLetter} id="sendLetter">
                            Send
                        </button>
                    </div>
                </article>
                <div className="envelope front"></div>
                <div className="envelope back"></div>
            </div>
            <button onClick={toggleLetter} className="result-message centered">
                Thank you for your message! Send another
            </button>
        </div>
    );
}
