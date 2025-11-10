import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL; 
// const BASE_URL = 'https://cs.ccit.sa/api/'
const BASE_URL = 'https://api.ccit.sa/api/'



export const createAPIEndpoint = (endpoint, params) => {

    let url = BASE_URL + endpoint;

    return {
        fetchAll: () => axios.get(url, { params }),
        fetchById: id => axios.get(url + id, { params }),
        create: newRecord => axios.post(url, newRecord, { params }),
        delete: (id) => axios.delete(url + id, { params }),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord, { params }),
    }
}