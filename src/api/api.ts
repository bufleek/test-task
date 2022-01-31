import axios from "axios";

/*
 * Create an instance of axios http client
 * configure baseURL
 */
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default api;
