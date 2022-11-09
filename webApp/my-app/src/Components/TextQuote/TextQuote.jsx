import "./TextQuote.scss";
import React from "react";

export default function TextQuote() {
    const [quote, setQuote] = React.useState("");
    const [author, setAuthor] = React.useState("");

    React.useEffect(() => {
        fetchQuote();
    }, []);

    function fetchQuote() {
        // GET request using fetch with error handling
        fetch("http://localhost:8080/quote")
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
