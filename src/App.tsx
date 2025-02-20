import React, { useState, useEffect } from "react";
import FactDisplay from "./FactDisplay";

interface CatFact {
  fact: string;
}

const App: React.FC = () => {
  const [fact, setFact] = useState<string>("");

  const fetchFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data: CatFact) => setFact(data.fact));
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div>
      <h1>🐱 Random Cat Fact 🐱</h1>
      <FactDisplay fact={fact} fetchFact={fetchFact} />
    </div>
  );
};

export default App;
