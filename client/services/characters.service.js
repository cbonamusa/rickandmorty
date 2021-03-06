const url = 'http://localhost:5000';

/**
* Gets all the characters from BE
* @async
* @returns the response data
*/   
export const getCharacters = async () => {
   const res = await fetch(`${url}/api/characters`)
   return res.json()
}

/**
* Gets all the characters from BE
* @async
* @param id Id of the character
* @returns the response data
*/   
export const getFavCharacter = async (id) => {
   const resp = await fetch(`${url}/api/user/favourites`, {
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
   });
   const result = await resp.json();
   return result;
}