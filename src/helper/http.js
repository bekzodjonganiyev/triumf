export const http = axios.create({
    baseURL: 'http://localhost:5000/',
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json",
      "Token": localStorage.getItem("token")
    }
  });