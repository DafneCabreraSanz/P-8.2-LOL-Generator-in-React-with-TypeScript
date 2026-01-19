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

  // Handler to fetch and display a new joke
  // newJokeButton.addEventListener("click", async () => {...})
  const handleNewJoke = async (): Promise<void> => {
    try {
      // joke = await response.json()
      const data: Joke = await getRandomJoke();
      setJoke(data);
    } catch (error) {
      setJoke(null);
    }
  };

  return (
    // <div class="app">
    <div className="app">
      {/* <h1>LOL Generator</h1> */}
      <Title />

      {/* <button id="new-joke" class="button">Get Joke</button> */}
      <Buttons onClick={handleNewJoke} title="Get Joke" />

      {/* <div id="result"> */}
      {joke && (
        <JokeGeneral joke={joke} />
      )}

      {/* <div id="error"> */}
      {!joke && (
        <div id="error">
          <p>Something went wrong with the connection, it's no joke :(</p>
          <img src="img/sad-pikachu.gif" alt="no joke :(" />
        </div>
      )}
    </div>
  );
};

export default App;
