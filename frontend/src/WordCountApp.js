import React, { useState } from "react";
import "./WordCountApp.css";

function WordCountApp() {
  const [url, setUrl] = useState("");
  const [wordCount, setWordCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const isValidURL = (inputURL) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(inputURL);
  };

  const handleSubmit = async () => {
    if (!isValidURL(url)) {
      setError("Please enter a valid URL.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://www.localhost:8000/count-words/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setWordCount(data.word_count);
        setError(null);
      } else {
        const errorData = await response.json();
        setError("An error occurred while fetching the URL.");
        setWordCount(null)
      }
    } catch (error) {
      console.error("Error:", error);
      setWordCount(null)
      setError("An error occurred while fetching the URL.");
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
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Counting..." : "Count Words"}
        </button>
      </div>
      {isLoading && <div className="spinner"></div>}
      {wordCount == null && error !== null && <div className="error">{error}</div>}
      {error == null && wordCount !== null && (
        <div className="result">
          Number of words on the page: {wordCount}
        </div>
      )}
    </div>
  );
}

export default WordCountApp;
