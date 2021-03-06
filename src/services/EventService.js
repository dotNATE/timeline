import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "connent-type": "aaplication/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
};
