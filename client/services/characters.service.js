import axios from 'axios';

const url = 'http://localhost:5000'

export const getCharacters = async () => {
    const res = await axios.get(`${url}/api/characters`)
    return res.data
}