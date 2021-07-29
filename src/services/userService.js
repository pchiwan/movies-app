import { API_URL } from "./config";

const USER_API_URL = `${API_URL}/user/favorites`;

export async function getUserFavorites() {
  const response = await fetch(USER_API_URL);
  return response.json();
}

export function addToFavorites(data) {
  return fetch(USER_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function deleteFromFavorites(id) {
  return fetch(`${USER_API_URL}/${id}`, {
    method: "DELETE",
  });
}
