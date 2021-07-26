import { API_URL } from "../config";

const MOVIES_API_URL = API_URL;

export async function getAllMovies() {
  const response = await fetch(MOVIES_API_URL);
  const data = await response.json();
  return data.movies;
}

export async function getByCategory(category) {
  const response = await fetch(`${MOVIES_API_URL}/categories/${category}`);
  return response.json();
}

export async function getById(id) {
  const response = await fetch(`${MOVIES_API_URL}/${id}`);
  return response.json();
}

export async function searchByTitle(title) {
  const response = await fetch(`${MOVIES_API_URL}/search?title=${title}`);
  return response.json();
}
