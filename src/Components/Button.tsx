import React from "react";

interface ButtonsProps {
  onClick: () => void;
  title: string;
}

// Reusable button component
// const newJokeButton = <HTMLButtonElement>document.getElementById("new-joke")
export const Buttons: React.FC<ButtonsProps> = ({ onClick, title }) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
};
