import React from "react";

interface ButtonsProps {
  handleClick: () => void;
  title: string;
}

// Reusable button component
// const newJokeButton = <HTMLButtonElement>document.getElementById("new-joke")
export const Buttons: React.FC<ButtonsProps> = ({ handleClick, title }) => {
  return (
    <button className="button" onClick={handleClick}>
      {title}
    </button>
  );
};
