import React, { useState } from "react";
import "./App.css";

// interface Joke { type: string, setup: string, punchline: string, id: number }
import type { Joke } from "./types/Joke";
// const response = await fetch("https://official-joke-api.appspot.com/random_joke")
import { getRandomJoke } from "./Services/jokesServices";

import { Title } from "./Components/Title";
import { Buttons } from "./Components/Button";
import { JokeGeneral } from "./Components/JokeGeneral";

// Main app component that manages joke state and fetching
const App: React.FC = () => {
  // let joke: Joke
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<boolean>(false);

  // Handler to fetch and display a new joke
  // newJokeButton.addEventListener("click", async () => {...})
  const handleNewJoke = async (): Promise<void> => {
    const data = await getRandomJoke();
    
    if (data === null) {
      setJoke(null);
      setError(true);
    } else {
      setJoke(data);
      setError(false);
    }
  };

  return (
    // <div class="app">
    <div className="app">
      {/* <h1>LOL Generator</h1> */}
      <Title />

      {/* <button id="new-joke" class="button">Get Joke</button> */}
      <Buttons handleClick={handleNewJoke} title="Get Joke" />

      {/* <div id="result"> */}
      {joke && !error && (
        <JokeGeneral joke={joke} />
      )}

      {/* <div id="error"> */}
      {error && (
        <div id="error">
          <p>Something went wrong with the connection, it's no joke :(</p>
          <img src="img/sad-pikachu.gif" alt="no joke :(" />
        </div>
      )}
    </div>
  );
};

export default App;
