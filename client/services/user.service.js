const baseUrl = 'http://localhost:5000/login'


export const registerRequest = async (user) => {
    const resp = await fetch(`http://localhost:5000/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });
      const json = await resp.json();
      return json;
}

const loginRequest = async (payload) => {
    const res = await axios({
        method: 'POST',
        url: baseUrl,
        data: payload,
        headers: { "Content-Type": "application/json" },
    })
    return res.data
}

export default loginRequest