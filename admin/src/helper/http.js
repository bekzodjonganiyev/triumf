import axios from "axios"

export const http = axios.create({
    baseURL: 'https://api.triumf-express.uz/api/v1/dashboard/',
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });