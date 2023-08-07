// services/api/apiService.js
import axios from 'axios';

const requests = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default requests;
