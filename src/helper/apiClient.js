import axios from "axios";

import { http } from "./http";

class ClientApiService {
  async getAll(url) {
    return await http.get(url);
  }

  async getById(url) {
    return await http.get(url);
  }

  add(url, data) {
    return http.post(url, data);
  }

  async update(url, data) {
    return await http.put(url, data);
  }

  async delete(url) {
    return await http.delete(url);
  }

  async getRoles() {
    axios.defaults.baseURL = "https://triumf.pythonanywhere.com/api/v1/";
    axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    return await axios.get("profile/");
  }
}

export default new ClientApiService();
