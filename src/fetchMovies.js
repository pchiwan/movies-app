import { API_URL } from "./config";

export async function fetchMovieCatalog() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.movies;
  } catch (err) {
    console.log(err);
    return [];
  }
}
