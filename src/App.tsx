import React, { useState } from "react";
import "./App.css";

// Tipo Joke: interface Joke { type, setup, punchline, id }
import type { Joke } from "./types/Joke";
// Servicio API: fetch("https://official-joke-api.appspot.com/random_joke")
import { getRandomJoke } from "./Services/jokesServices";

import { Title } from "./Components/Title";
import { Buttons } from "./Components/Button";
import { JokeGeneral } from "./Components/JokeGeneral";

const App: React.FC = () => {
  // Estado: let joke: Joke
  const [joke, setJoke] = useState<Joke | null>(null);
  // Control de visibilidad del punchline
  const [showPunchline, setShowPunchline] = useState<boolean>(false);
  // Control de visibilidad: resultContainer.style.display
  const [showResult, setShowResult] = useState<boolean>(false);
  // Control de visibilidad: errorContainer.style.display
  const [showError, setShowError] = useState<boolean>(false);

  // Evento: newJokeButton.addEventListener("click", async () => {...})
  const handleNewJoke = async (): Promise<void> => {
    try {
      // const response = await fetch(...); joke = await response.json()
      const data: Joke = await getRandomJoke();
      setJoke(data);
      setShowPunchline(false);
      // errorContainer.style.display = "none"
      setShowError(false);
      // resultContainer.style.display = "block"
      setShowResult(true);
    } catch (error) {
      // resultContainer.style.display = "none"
      setShowResult(false);
      // errorContainer.style.display = "block"
      setShowError(true);
    }
  };

  // Evento: punchButton.addEventListener("click", () => { showPunchLine(joke.punchline) })
  const handleShowPunchline = (): void => {
    setShowPunchline(true);
  };

  return (
    // <div class="app">
    <div className="app">
      {/* <h1>LOL Generator</h1> */}
      <Title />

      {/* <button id="new-joke" class="button">Get Joke</button> */}
      <Buttons onNewJoke={handleNewJoke} />

      {/* <div id="result"> */}
      {showResult && joke && (
        <JokeGeneral
          joke={joke}
          showPunchline={showPunchline}
          onShowPunchline={handleShowPunchline}
        />
      )}

      {/* <div id="error"> */}
      {showError && (
        <div id="error">
          <p>Something went wrong with the connection, it's no joke :(</p>
          <img src="/img/sad-pikachu.gif" alt="no joke :(" />
        </div>
      )}
    </div>
  );
};

export default App;
