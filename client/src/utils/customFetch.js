import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobhine.onrender.com/api/v1",
});

export default customFetch;
