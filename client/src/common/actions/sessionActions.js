export function getSession() {
  return {
    type: "GET_SESSION",
    payload: fetch("/api/getSession").then((response) =>
      response.status === 200 ? response.json() : Promise.reject(response.error)
    ),
  };
}

export function login(credentials) {
  return {
    type: "LOGIN",
    payload: fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    }),
  };
}

export function logout() {
  return {
    type: "LOGOUT",
    payload: fetch(`/api/logout`, {
      method: "POST",
    }),
  };
}
