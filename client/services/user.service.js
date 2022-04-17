const url = 'http://localhost:5000'

export const registerRequest = async ({email, password, username}) => {
    const resp = await fetch(`${url}/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password, username})
      });
      const json = await resp.json();
      return json;
}

export const loginRequest = async ({username, password}) => {
    const resp = await fetch(`${url}/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username, password})
      });
      const token = await resp.json();
      return token;
}

export const addFavouritesService = async (favourites, username) => {
  const resp = await fetch(`${url}/user/addfavourites`, {
    method:'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({favourites, username })
  });
  const result = await resp.json();
  return result;
}

export const removeFromFavourites = async (favourites, username) => {
  const resp = await fetch(`${url}/user/removefavourites`, {
    method:'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ favourites, username })
  });
  const result = await resp.json();
  return result;
}

export const favouritesFromServer = async (username) => {
  const resp = await fetch(`${url}/user/favourites`, {
    method:'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username })
  });
  const result = await resp.json();
  return result;
} 