import { BASE_API_URL } from "./config";

const AUTH_API_URL = `${BASE_API_URL}/api/auth`;

export async function register(data) {
  const response = await fetch(`${AUTH_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status !== 200) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return response.json();
}

export async function login(data) {
  const response = await fetch(`${AUTH_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export function logout() {
  return fetch(`${AUTH_API_URL}/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function getLoggedUser() {
  const response = await fetch(`${AUTH_API_URL}/getuser`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
    },
  });

  try {
    const data = await response.json();
    return data;
  } catch {
    return null;
  }
}
