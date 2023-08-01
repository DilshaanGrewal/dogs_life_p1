import axios from 'axios';

export const getDogs = () => {
    const hostNameUrl = "http://localhost:8080/api/v1"
    const dogs = axios.get(`${hostNameUrl}/dogs`);
    return dogs
}
