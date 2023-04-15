import { http } from "./http";

class ClientApiService {
  getAll(url){
    return http.get(url)
  }

  getById(url, id){
    return http.get(`${url}/${id}`)
  }

  add(url, data){
    return http.post(url, data)
  }

  update(url, id, data){
    return http.put(`${url}/${id}`, data)
  }

  delete(id){
    return http.delete(id)
  }
}

export default new ClientApiService();