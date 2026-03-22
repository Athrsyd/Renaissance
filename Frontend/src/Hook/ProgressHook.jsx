import { useState } from 'react'
import API from '../services/api'

export const ProgressHook = () => {
    const [dataProgress, setDataProgress] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchProgress = async () => {
        setIsLoading(true)
        try {
            const token = localStorage.getItem('token')
            const response = await API.get('progress', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setDataProgress(response.data.data)
        }
        catch (error) {
            console.error('Error fetching progress:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const updateProgress = async (mapelId, progressPersen, soalSelesai =[]) => {
        setIsLoading(true);
        try {
            const isSelesai = progressPersen === 100;
            const token = localStorage.getItem('token');
            const res = await API.put(`progress/${mapelId}`, {
                "progress_persen": progressPersen,
                "soal_selesai": soalSelesai,
                "is_selesai": isSelesai
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Progress updated:', res.data);
            return res.data.data
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }


        return {
            fetchProgress,
            updateProgress,
            dataProgress,
            isLoading,
        }
    }
}

    export default ProgressHook