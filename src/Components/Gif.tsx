import React from "react";

interface GifProps {
  punchline: string;
}

// function showPunchLine(punchLine: string = "") {...}
export const Gif: React.FC<GifProps> = ({ punchline }) => {
  // let num = Math.round(Math.random() * 6)
  const randomGif: number = Math.round(Math.random() * 6);

  return (
    // punchContainer.innerHTML = ""
    // punchContainer.innerHTML += `<p>${punchLine}</p>`
    // punchContainer.innerHTML += `<img src="img/lol${num}.gif" alt="LOL GIF"/>`
    <div className="punch-container">
      <p>{punchline}</p>
      <img src={`img/lol${randomGif}.gif`} alt="LOL GIF" />
    </div>
  );
};
