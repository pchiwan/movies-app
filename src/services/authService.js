import { API_URL } from "./config";

const AUTH_API_URL = `${API_URL}/auth`;

export async function register(data) {
  const response = await fetch(`${AUTH_API_URL}/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": window.location.origin,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function login(data) {
  const response = await fetch(`${AUTH_API_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": window.location.origin,
    },
    body: JSON.stringify(data),
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export function logout() {
  return fetch(`${AUTH_API_URL}/logout`);
}

export async function getLoggedUser() {
  const response = await fetch(`${AUTH_API_URL}/getuser`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": window.location.origin,
    },
  });

  return response.json();
}
