import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async signup(newUser) {
    const response = await API.post("/auth/signup", {
      ...newUser
    });
    return response.data;
  },
  async login(user) {
    const response = await API.post("/auth/login", {
      ...user
    });
    return response.data;
  },
  async getOneClient(client) {
    const response = await API.get(`/me/clients/${client}`);
    return response.data;
  },
  async getAllClients() {
    const response = await API.get("/me/clients");
    return response.data;
  },
  async getAllProducts() {
    const response = await API.get("/me/products");
    console.log(response.data);
    return response.data;
  }
};
