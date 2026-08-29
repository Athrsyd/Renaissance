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
        try {
            const progressPersen = jumlahSoal > 0
                ? Math.round((soalSelesai.length / jumlahSoal) * 100)
                : 0
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
        }
    }

    /**
     * Menghitung rata-rata progress per mapel+kelas secara dinamis.
     * progressKey format: "{mapelBackend}-kelas{kelas}" — semuanya lowercase.
     * Contoh: "matematika-kelas10", "pendidikan pancasila-kelas11"
     *
     * Pencocokan dilakukan dengan mapel (nama) + kelas dari modul yang terhubung ke progress.
     * Backend mengembalikan field `mapel` (string) dan `bab` (integer) di setiap item progress.
     */
    const countTotalProgress = () => {
        const result = {}

        for (const mapelConf of MAPEL_LIST) {
            if (!dataProgress?.length) {
                result[mapelConf.progressKey] = 0
                continue
            }
            // Filter progress untuk mapel+kelas ini
            const items = dataProgress.filter((item) => {
                const mapelMatch = (item?.mapel || '').toLowerCase() === mapelConf.mapelBackend.toLowerCase()
                // Backend mungkin tidak kembalikan kelas di setiap item progress,
                // sehingga kita tidak filter per kelas jika info kelas tidak tersedia.
                // Untuk yang ada kelas, filter juga per kelas.
                if (item?.kelas !== undefined && item?.kelas !== null) {
                    return mapelMatch && Number(item.kelas) === mapelConf.kelas
                }
                return mapelMatch
            })

            if (items.length === 0) {
                result[mapelConf.progressKey] = 0
                continue
            }
            const avg = Math.round(
                items.reduce((acc, cur) => acc + Number(cur.progress || 0), 0) / items.length
            )
            result[mapelConf.progressKey] = Number.isNaN(avg) ? 0 : avg
        }

        // Alias lama agar komponen yang masih destructure { totalProgress, totalProgressPkn } tidak perlu diubah.
        result.totalProgress = result['matematika-kelas10'] ?? 0
        result.totalProgressPkn = result['pendidikan pancasila-kelas10'] ?? 0

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
