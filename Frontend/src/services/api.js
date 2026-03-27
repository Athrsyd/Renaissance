import axios from 'axios'

const API = axios.create({
    baseURL:"https://donationapi.my.id/api/v1"
})

export default API;