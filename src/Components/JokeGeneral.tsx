import React, { useState, useEffect } from "react";
import type { Joke } from "../types/Joke";
import { Gif } from "./Gif";

interface JokeGeneralProps {
  joke: Joke;
}

// Componente que representa: <div id="result">
export const JokeGeneral: React.FC<JokeGeneralProps> = ({ joke }) => {
  const [showPunchline, setShowPunchline] = useState<boolean>(false);

  useEffect(() => {
    setShowPunchline(false);
  }, [joke.id]);

  return (
    <div id="result">
      {/* <p id="setup-container">: setupContainer.textContent = joke.setup */}
      <p id="setup-container">{joke.setup}</p>

      {/* <button id="punch-button">: punchButton.addEventListener("click", ...) */}
      <button className="button" id="punch-button" onClick={() => setShowPunchline(true)}>
        Reveal Punchline
      </button>

      {/* Contenedor punchline: <div class="punch-container"> */}
      {showPunchline && <Gif punchline={joke.punchline} />}
    </div>
  );
};
