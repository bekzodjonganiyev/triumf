import axios from "axios";

import { http } from "./http";

class ClientApiService {
  getAll(url) {
    return http.get(url);
  }

  getById(url) {
    return http.get(url);
  }

  add(url, data) {
    return http.post(url, data);
  }

  update(url, data) {
    return http.put(url, data);
  }

  delete(url) {
    return http.delete(url);
  }

  getRoles() {
    axios.defaults.baseURL = "https://api.triumf-express.uz/api/v1/";
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";
    return axios.get("profile/");
  }
}

export default new ClientApiService();
