import { useState } from 'react'
import API from '../services/api'

export const ProgressHook = () => {
    const [dataProgress, setDataProgress] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchProgress = async () => {
        setIsLoading(true)
        try {
            const token = localStorage.getItem('token')
            const response = await API.get('/dashboard/continue-learning', {
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

    return {
        fetchProgress,
        dataProgress,
        isLoading,
    }
}

export default ProgressHook