import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-5b559.firebaseio.com'
});

export default instance;