import React from "react";
import type { Joke } from "../types/Joke";
import { Gif } from "./Gif";

interface JokeGeneralProps {
  joke: Joke;
  showPunchline: boolean;
  onShowPunchline: () => void;
}

// Componente que representa: <div id="result">
export const JokeGeneral: React.FC<JokeGeneralProps> = ({ 
  joke, 
  showPunchline, 
  onShowPunchline 
}) => {
  return (
    <div id="result">
      {/* <p id="setup-container">: setupContainer.textContent = joke.setup */}
      <p id="setup-container">{joke.setup}</p>

      {/* <button id="punch-button">: punchButton.addEventListener("click", ...) */}
      <button className="button" id="punch-button" onClick={onShowPunchline}>
        Reveal Punchline
      </button>

      {/* Contenedor punchline: <div class="punch-container"> */}
      {showPunchline && <Gif punchline={joke.punchline} />}
    </div>
  );
};
