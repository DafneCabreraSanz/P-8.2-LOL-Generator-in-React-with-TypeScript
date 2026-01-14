import type { Joke } from "../types/joke";

export const getRandomJoke = async (): Promise<Joke> => {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");

  if (!response.ok) {
    throw new Error("Error fetching joke");
  }

  return response.json();
};
