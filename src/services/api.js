import axios from "axios";

const api=axios.create({
    baseURL: "https://the-development.space/products/",
  });


export default api;