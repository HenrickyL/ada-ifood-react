import axios from 'axios';

const client = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL

});

export { client };