import "./TextQuote.scss";
import React from "react";

export default function TextQuote() {
    const [quote, setQuote] = React.useState("");
    const [author, setAuthor] = React.useState("");

    React.useEffect(() => {
        // fetchQuote();
        setQuote("All you need is the plan, the road map, and the courage to press on to your destination.");
        setAuthor("Earl Nightingale");
    }, []);

    function fetchQuote() {
        // GET request using fetch with error handling
        fetch("http://localhost:8080/quote")
        // fetch("https://jcolaco.dev/api/quote")
            .then(async (response) => {
                let data = await response.json();
                setQuote(data.q);
                setAuthor(data.a);

                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
                setQuote("All you need is the plan, the road map, and the courage to press on to your destination.");
                setAuthor("Earl Nightingale");
            });
    }

    return (
        <div className="TextQuote">
            <cite>
                {quote}
                <br />-{author}
            </cite>
        </div>
    );
}
