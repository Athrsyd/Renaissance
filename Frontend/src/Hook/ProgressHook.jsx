import { useState } from 'react'
import API from '../services/api'

export const ProgressHook = () => {
    const [dataProgress, setDataProgress] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchProgress = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const token = localStorage.getItem('token')
            const response = await API.get('progress', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setDataProgress(Array.isArray(response?.data?.data) ? response.data.data : [])
            console.log('Fetched progress:', response.data.data)
        }
        catch (error) {
            console.error('Error fetching progress:', error)
            setError(error.response?.data?.message || 'Gagal memuat progress')
            setDataProgress([])
        } finally {
            setIsLoading(false)
        }
    }

    const updateProgress = async (mapelId, soalSelesai = [], jumlahSoal, bab = null) => {
        setIsLoading(true);
        setError(null)
        try {
            const progressPersen = Math.round((soalSelesai.length / jumlahSoal) * 100);
            const isSelesai = progressPersen === 100;
            const token = localStorage.getItem('token');
            const payload = {
                "progress_persen": progressPersen,
                "soal_selesai": soalSelesai,
                "is_selesai": isSelesai
            };
            
            // Always include bab if provided (backend will fallback to ModulBelajar if needed)
            if (bab !== null && bab !== undefined) {
                payload.bab = bab;
            }
            
            const res = await API.put(`progress/${mapelId}`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Progress updated:', res.data);
            return res.data.data
        } catch (error) {
            console.log(error)
            setError(error.response?.data?.message || 'Gagal memperbarui progress')
        } finally {
            setIsLoading(false)
        }

    }

    const countTotalProgress = () => {
        if (!dataProgress?.length) {
            return {
                totalProgress: 0,
                totalProgressPkn: 0,
            }
        }

        const mtk = dataProgress.filter((i) => (i?.mapel || '').toLowerCase() === 'matematika')
        const pkn = dataProgress.filter((i) => (i?.mapel || '').toLowerCase() === 'pendidikan pancasila')

        const mtkAvg = mtk.length > 0
            ? Math.round(mtk.reduce((a, c) => a + Number(c.progress || 0), 0) / mtk.length)
            : 0
        const pknAvg = pkn.length > 0
            ? Math.round(pkn.reduce((a, c) => a + Number(c.progress || 0), 0) / pkn.length)
            : 0

        return {
            totalProgress: Number.isNaN(mtkAvg) ? 0 : mtkAvg,
            totalProgressPkn: Number.isNaN(pknAvg) ? 0 : pknAvg,
        }
    }

    return {
        fetchProgress,
        updateProgress,
        countTotalProgress,
        dataProgress,
        isLoading,
        error,
    }

}

export default ProgressHook