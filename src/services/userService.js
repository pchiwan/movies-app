import { API_URL } from "./config";

const USER_API_URL = `${API_URL}/user/favorites`;

export async function getUserFavorites(abortCtrl) {
  const response = await fetch(USER_API_URL, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": window.location.origin,
    },
    signal: abortCtrl.signal,
  });
  const data = await response.json();
  return data.favorites;
}

export function addToFavorites(data) {
  return fetch(USER_API_URL, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": window.location.origin,
    },
    body: JSON.stringify(data),
  });
}

export function deleteFromFavorites(id) {
  return fetch(`${USER_API_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": window.location.origin,
    },
  });
}
