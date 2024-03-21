import axios from 'axios';

const client = axios.create({
    baseURL: import.meta.env.REACT_APP_URL
});

export { client };