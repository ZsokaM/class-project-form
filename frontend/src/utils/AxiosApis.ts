import axios from "axios";

const AxiosReportersApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const AxiosUserApi = axios.create({
  baseURL: "http://localhost:5050/api/user/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const AxiosComplaintApi = axios.create({
  baseURL: "http://localhost:5050/api/complaint/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export { AxiosReportersApi, AxiosUserApi, AxiosComplaintApi };
