import React, { useState, useEffect } from "react";
import "./RandomQuote.css";

function RandomQuote() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const getQuote = async () => {
      await fetch(`https://type.fit/api/quotes`)
        .then((res) => res.json())
        .then((data) =>
          setQuote(data[Math.floor(Math.random() * (data.length - 1))])
        );
    };
    getQuote();
  }, []);
  return (
    <div className="header__quote">
      <p className="header__quote--text">"{quote.text}"</p>
      <p className="header__quote--author">~ {quote.author}</p>
    </div>
  );
}
export default RandomQuote;