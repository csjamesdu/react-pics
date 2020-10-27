import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CLECvefxjWhGtsjqw1CUmAlJUK1KqvT_KvrqroxUxmg'
    }
});

