import React from "react";
import type { Joke } from "../types/joke";
import { Gif } from "./Gif";

interface JokeGeneralProps {
  joke: Joke;
  showPunchline: boolean;
  onShowPunchline: () => void;
}

// <div id="result">
export const JokeGeneral: React.FC<JokeGeneralProps> = ({ 
  joke, 
  showPunchline, 
  onShowPunchline 
}) => {
  return (
    <div id="result">
      {/* <p id="setup-container"></p> - setupContainer.textContent = joke.setup */}
      <p id="setup-container">{joke.setup}</p>

      {/* <button id="punch-button" class="button">Reveal Punchline</button> */}
      <button className="button" id="punch-button" onClick={onShowPunchline}>
        Reveal Punchline
      </button>

      {/* <div class="punch-container"></div> */}
      {showPunchline && <Gif punchline={joke.punchline} />}
    </div>
  );
};
