import React, { useEffect, useState } from "react";
import Button from "./Button";

function Quotes() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("https://api.realinspire.live/v1/quotes/random");
        if (!res.ok) throw new Error("Network issues😢")
        const data = await res.json();
        const { content, author } = data[0];
        setContent(content);
        setAuthor(author);
      } catch (error) {
        setContent("oopsie! Server Error😢");
      } finally {
        setLoading(false);
      }
    }
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-3/12 mx-auto my-10">
      <p className="py-7 bg-white text-center rounded-xl outline-none w-full">{content}</p>
      {<p className="py-7 text-center">by {author}</p>}
      <Button text="Click Here!"/>
    </div>
  );
}

export default Quotes;
