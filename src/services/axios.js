import axios from "axios";

var instance = axios.create({
  baseURL: `http://localhost:8081`,
  xsrfCookieName: "mytoken",
  xsrfHeaderName: "csrf-token"
});

export default instance;
