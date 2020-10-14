import axios from "axios";

const copy = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default copy;

