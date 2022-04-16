const loginUrl = 'http://localhost:5000/login'
const registerUrl = 'http://localhost:5000/register'
const favouriteUrl = 'http://localhost:5000/user/favourites'



export const registerRequest = async ({email, password, username}) => {
    const resp = await fetch(registerUrl, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password, username})
      });
      const json = await resp.json();
      return json;
}

export const loginRequest = async ({username, password}) => {
    const resp = await fetch(loginUrl, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username, password})
      });
      const token = await resp.json();
      return token;
}

export const addFavouritesService = async ({username, favourites}) => {
  const resp = await fetch(favouriteUrl, {
    method:'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({username, favourites})
  });
  const result = await resp.json();
  return result;
}
