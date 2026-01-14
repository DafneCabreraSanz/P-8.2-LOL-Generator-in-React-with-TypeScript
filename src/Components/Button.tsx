import React from "react";

interface ButtonsProps {
  onNewJoke: () => void;
}

// const newJokeButton = <HTMLButtonElement>document.getElementById("new-joke")
export const Buttons: React.FC<ButtonsProps> = ({ onNewJoke }) => {
  return (
    <div>
      {/* <button id="new-joke" class="button">Get Joke</button> */}
      <button className="button" id="new-joke" onClick={onNewJoke}>
        Get Joke
      </button>
    </div>
  );
};
