import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/characters'

const getCharacters = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export default getCharacters