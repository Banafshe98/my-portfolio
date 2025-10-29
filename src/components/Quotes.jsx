import React, { useEffect, useState } from "react";
import Button from "./Button";
import Loading from "./Loading";
import { motion, AnimatePresence } from "framer-motion";


function Quotes() {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchQuote() {
    try {
      const res = await fetch("https://api.realinspire.live/v1/quotes/random");
      if (!res.ok) throw new Error("Network issues😢");
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
  useEffect(() => {
    setLoading(true);
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-3/12 mx-auto my-10">
      <h1 className="pb-10 pt-0 mt-0 font-bold text-2xl"> Your motivational quote of the Day!</h1>
      <div className="min-h-[150px] flex flex-col items-center justify-center w-full">
         <AnimatePresence mode="wait">
      {loading ? (
         <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
        <Loading />
        </motion.div>
      ) : (
         <motion.div
              key={content} // important for re-animation on change
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
          <p className="py-7 bg-white px-8 text-center rounded-xl outline-none w-full">
            {content}
          </p>
          <p className="py-7 text-center ">by {author}</p>
        </motion.div>
      )}
      </AnimatePresence>
      </div>

      <Button onClick={fetchQuote} text="Click Here!" />
    </div>
  );
}

export default Quotes;
