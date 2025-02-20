import React from "react";
import "./App.css";

// Update the props to accept the Joke object
interface FactDisplayProps {
  joke: { type: string; setup: string; punchline: string; id: number } | null;
  fetchJoke: () => void;
}

const FactDisplay: React.FC<FactDisplayProps> = ({ joke, fetchJoke }) => (
  <div className="fact-container">
    <p className="fact-text">
      {joke ? (
        <>
          <strong>Type:</strong> {joke.type} <br />
          <strong>Setup:</strong> {joke.setup} <br />
          <strong>Punchline:</strong> {joke.punchline}
        </>
      ) : (
        "Loading..."
      )}
    </p>
    <button className="refresh-button" onClick={fetchJoke}>
      Get New Joke
    </button>
  </div>
);

export default FactDisplay;

