import axios from "axios"

export const http = axios.create({
    baseURL: 'https://triumf.pythonanywhere.com/api/v1/dashboard/',
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  });