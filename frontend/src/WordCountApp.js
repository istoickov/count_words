import React, { useState } from "react";

function WordCountApp() {
  const [url, setUrl] = useState("");
  const [wordCount, setWordCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://www.localhost:8000/count-words/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setWordCount(data.word_count);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="WordCountApp">
      <h1>Word Count App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a URL"
          value={url}
          onChange={handleUrlChange}
        />
        <button onClick={handleSubmit}>Count Words</button>
      </div>
      {isLoading && <div className="spinner"></div>}
      {wordCount !== null && (
        <div className="result">Number of words on the page: {wordCount}</div>
      )}
    </div>
  );
}

export default WordCountApp;
