import axios from 'axios';

// usar json-server para ejecutar el servidor de la API: json-server --watch db.json

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(perPage, page){
        return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
    },
    getEvent(id){
        return apiClient.get(`/events/${id}`);
    },
    postEvent(event){
        return apiClient.post('/events/', event);
    }
}