import React, { useState, useEffect } from "react";
import type { Joke } from "../types/Joke";
import { Gif } from "./Gif";
import { Buttons } from "./Button";

interface JokeGeneralProps {
  joke: Joke;
}

// Displays joke setup and handles punchline reveal
// Component that represents: <div id="result">
export const JokeGeneral: React.FC<JokeGeneralProps> = ({ joke }) => {
  const [showPunchline, setShowPunchline] = useState<boolean>(false);

  // Reset punchline visibility when joke changes
  useEffect(() => {
    setShowPunchline(false);
  }, [joke.id]);

  return (
    <div id="result">
      {/* <p id="setup-container">: setupContainer.textContent = joke.setup */}
      <p id="setup-container">{joke.setup}</p>

      {/* <button id="punch-button">: punchButton.addEventListener("click", ...) */}
      <Buttons handleClick={() => setShowPunchline(true)} title="Reveal Punchline" />

      {/* Punchline container: <div class="punch-container"> */}
      {showPunchline && <Gif punchline={joke.punchline} />}
    </div>
  );
};
