import axios from "axios";
import * as PdvService from "./pdvService";

const API_URL = process.env.API

const http = axios.create({
  baseURL: API_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use((request) => {
  const session = JSON.parse(localStorage.getItem("SESSION"));

  request.headers.Authorization = `Bearer ${session ? session.token : null}`;

  return request;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { PdvService };

export default http;
