const url = 'http://localhost:5000'

/**
* Register Request to register a new user 
* @async
* @param email
* @param password
* @param username
* @returns the response data
*/   
export const registerRequest = async ({email, password, username}) => {
    const resp = await fetch(`${url}/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email, password, username})
      });
      const json = await resp.json();
      return json;
}

/**
* Login Request 
* @async
* @param password
* @param username
* @returns token
*/   
export const loginRequest = async ({username, password}) => {
    const resp = await fetch(`${url}/login`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username, password})
      });
      const token = await resp.json();
      return token;
}

/**
* Add favourite character in a specific user
* @async
* @param favourites
* @param username
* @returns the response data
*/ 
export const addFavouritesService = async (favourites, username) => {
  const resp = await fetch(`${url}/user/addfavourites`, {
    method:'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({favourites, username })
  });
  const result = await resp.json();
  return result;
}

/**
* Remove a favourite character in a specific user
* @async
* @param favourites
* @param username
* @returns the response data
*/ 
export const removeFromFavourites = async (favourites, username) => {
  const resp = await fetch(`${url}/user/removefavourites`, {
    method:'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ favourites, username })
  });
  const result = await resp.json();
  return result;
}

/**
* Gets the favourites id's from a user
* @async
* @param username
* @returns favourites result
*/ 
export const favouritesFromServer = async (username) => {
  const resp = await fetch(`${url}/user/favourites`, {
    method:'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username })
  });
  const result = await resp.json();
  return result;
} 