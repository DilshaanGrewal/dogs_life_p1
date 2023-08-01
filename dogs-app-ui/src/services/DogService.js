import {hostNameUrl} from '../config/api';
import axios from 'axios';

export const getDogs = () => {
    const dogs = axios.get('/dogs');
    return dogs
}
