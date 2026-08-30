import axios from 'axios'

/**
 * Sebelumnya baseURL di-hardcode ke http://127.0.0.1:8000/api/v1.
 * Sekarang dibaca dari VITE_API_URL di file .env — tidak perlu ubah kode
 * saat deploy ke server lain. Buat .env.local untuk dev lokal:
 *   VITE_API_URL=http://127.0.0.1:8000/api/v1
 */
const API = axios.create({
    baseURL: 'https://renaissence-backend.my.id/api/v1',
})

export default API
