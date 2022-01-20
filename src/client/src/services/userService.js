const USER_API_URL = "api/user/favorites";

export async function getUserFavorites(abortCtrl) {
  const response = await fetch(USER_API_URL, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    signal: abortCtrl.signal,
  });
  const data = await response.json();
  return data.favorites;
}

export function addToFavorites(id) {
  return fetch(USER_API_URL, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
    }),
  });
}

export function deleteFromFavorites(id) {
  return fetch(`${USER_API_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
