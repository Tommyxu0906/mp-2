import React, { useState, useEffect } from "react";
import FactDisplay from "./FactDisplay";
import "./App.css";

// Define the new Joke interface
interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

const App: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);

  const fetchJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((data: Joke) => setJoke(data));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app-container">
      <h1>😂 Random Programming Joke 😂</h1>
      <FactDisplay joke={joke} fetchJoke={fetchJoke} />
    </div>
  );
};

export default App;
