import { API_URL } from "./config";

const MOVIES_API_URL = API_URL;

export async function getAllMovies() {
  const response = await fetch(MOVIES_API_URL);
  const data = await response.json();
  return data.movies;
}

export async function getByCategory(category) {
  const response = await fetch(`${MOVIES_API_URL}/categories/${category}`);
  const data = response.json();
  return data.movies;
}

export async function getById(id) {
  const response = await fetch(`${MOVIES_API_URL}/${id}`);
  const data = await response.json();
  return data.movie;
}

export async function searchByTitle(title) {
  const response = await fetch(`${MOVIES_API_URL}/search?title=${title}`);
  const data = await response.json();
  return data.movie;
}
