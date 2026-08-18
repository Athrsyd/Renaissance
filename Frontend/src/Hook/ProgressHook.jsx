import { useState } from 'react'
import API from '../services/api'
import MAPEL_LIST from '../Config/mapelConfig'

export const ProgressHook = () => {
    const [dataProgress, setDataProgress] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchProgress = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const tokenRenaissance = localStorage.getItem('tokenRenaissance')
            const response = await API.get('progress', {
                headers: { Authorization: `Bearer ${tokenRenaissance}` },
            })
            setDataProgress(Array.isArray(response?.data?.data) ? response.data.data : [])
        } catch (error) {
            setError(error.response?.data?.message || 'Gagal memuat progress')
            setDataProgress([])
        } finally {
            setIsLoading(false)
        }
    }

    const updateProgress = async (mapelId, soalSelesai = [], jumlahSoal, bab = null) => {
        setIsLoading(true)
        setError(null)
        try {
            const progressPersen = Math.round((soalSelesai.length / jumlahSoal) * 100)
            const isSelesai = progressPersen === 100
            const tokenRenaissance = localStorage.getItem('tokenRenaissance')
            const payload = {
                progress_persen: progressPersen,
                soal_selesai: soalSelesai,
                is_selesai: isSelesai,
            }
            if (bab !== null && bab !== undefined) {
                payload.bab = bab
            }
            const res = await API.put(`progress/${mapelId}`, payload, {
                headers: { Authorization: `Bearer ${tokenRenaissance}` },
            })
            return res.data.data
        } catch (error) {
            setError(error.response?.data?.message || 'Gagal memperbarui progress')
        } finally {
            setIsLoading(false)
        }
    }

    /**
     * Menghitung rata-rata progress per mapel secara dinamis.
     * Mengembalikan object dengan key = progressKey dari mapelConfig
     * (contoh: { matematika: 60, 'pendidikan pancasila': 80, ipa: 0 })
     */
    const countTotalProgress = () => {
        const result = {}

        for (const mapel of MAPEL_LIST) {
            if (!dataProgress?.length) {
                result[mapel.progressKey] = 0
                continue
            }
            const items = dataProgress.filter(
                (i) => (i?.mapel || '').toLowerCase() === mapel.progressKey
            )
            if (items.length === 0) {
                result[mapel.progressKey] = 0
                continue
            }
            const avg = Math.round(
                items.reduce((acc, cur) => acc + Number(cur.progress || 0), 0) / items.length
            )
            result[mapel.progressKey] = Number.isNaN(avg) ? 0 : avg
        }

        // Pertahankan alias lama agar komponen lama yang masih
        // destructure { totalProgress, totalProgressPkn } tidak perlu diubah.
        result.totalProgress = result['matematika'] ?? 0
        result.totalProgressPkn = result['pendidikan pancasila'] ?? 0

        return result
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
