import axios from "axios";

// url api: movie/now_playing?api_key=7cfb834dc3c3099f0200937b20d4fb8c&language=pt-BR
// base url: https://api.themoviedb.org/3

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export default api
