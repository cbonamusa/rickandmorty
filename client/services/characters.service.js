import axios from 'axios';

const url = 'http://localhost:5000'

export const getCharacters = async () => {
    // const res = await axios.get(`${url}/api/characters`)
    // return res.data
    const res = await fetch(`${url}/api/characters`)
    return res.json()
}

export const getFavCharacter = async (id) => {
    const resp = await fetch(`${url}/api/user/favourites`, {
        method:'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      const result = await resp.json();
      return result;
}