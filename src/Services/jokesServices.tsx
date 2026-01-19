import type { Joke } from "../types/Joke";

// Fetches a random joke from the Official Joke API
export const getRandomJoke = async (): Promise<Joke | null> => {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) {
      throw new Error("Error fetching joke");
    }

    return response.json();
    
  } catch (error) {
    return null;
  }
};
