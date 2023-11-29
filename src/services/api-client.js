import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '65ed992501394c0aad1d8586aec41048'
    }
})