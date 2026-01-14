import React, { useState } from "react";
import "./App.css";

// interface Joke { type: string, setup: string, punchline: string, id: number }
import type { Joke } from "./types/Joke";
// const response = await fetch("https://official-joke-api.appspot.com/random_joke")
import { getRandomJoke } from "./Services/jokesServices";

import { Title } from "./Components/Title";
import { Buttons } from "./Components/Button";
import { JokeGeneral } from "./Components/JokeGeneral";

const App: React.FC = () => {
  // let joke: Joke
  const [joke, setJoke] = useState<Joke | null>(null);
  const [showPunchline, setShowPunchline] = useState<boolean>(false);
  // const resultContainer = document.getElementById("result"); resultContainer.style.display = "none"
  const [showResult, setShowResult] = useState<boolean>(false);
  // const errorContainer = document.getElementById("error"); errorContainer.style.display = "none"
  const [showError, setShowError] = useState<boolean>(false);

  // newJokeButton.addEventListener("click", async () => {...})
  const handleNewJoke = async (): Promise<void> => {
    try {
      // joke = await response.json()
      const data: Joke = await getRandomJoke();
      setJoke(data);
      // punchContainer.innerHTML = ""
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

  // punchButton.addEventListener("click", () => { showPunchLine(joke.punchline); })
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
          <img src="img/sad-pikachu.gif" alt="no joke :(" />
        </div>
      )}
    </div>
  );
};

export default App;
