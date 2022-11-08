import "./TextQuote.scss";
import React from "react";

export default function TextQuote() {
    const [counter, setCounter] = React.useState(0);
    const [quote, setQuote] = React.useState("");
    const [author, setAuthor] = React.useState("");

    React.useEffect(() => {
        fetchQuote();
    }, [counter]);

    function timeout(delay) {
        return new Promise((res) => setTimeout(res, delay));
    }

    function fetchQuote() {
        // GET request using fetch with error handling
        fetch("https://zenquotes.io/api/random")
            .then(async (response) => {
                const data = await response.json();
                setQuote(data[0].q);
                setAuthor(data[0].a);

                if (data[0].a === "zenquotes.io") {
                    setQuote("");
                    setAuthor(" thinking on a quote...");

                    await timeout(10000);
                    setCounter(counter + 1);
                }
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
            })
            .catch((error) => {
                console.error("There was an error!", error);
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
