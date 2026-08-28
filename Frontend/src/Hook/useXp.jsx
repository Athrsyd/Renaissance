/**
 * useXp.jsx
 *
 * Hook untuk mengelola sistem XP dan Level.
 *
 * Cara pakai:
 *   const { xp, level, xpToNext, tambahXp, fetchXp } = useXp()
 *
 * tambahXp({ jumlahSalah }) dipanggil saat 1 bab selesai.
 * Mengembalikan result: { xpDapat, xpTotal, levelNaik, levelBaru }
 */

import { useState, useEffect, useCallback } from 'react'
import API from '../services/api'

const useXp = () => {
    const [xp, setXp]             = useState(0)
    const [level, setLevel]       = useState(1)
    const [xpToNext, setXpToNext] = useState(1000)
    const [xpInLevel, setXpInLevel] = useState(0)
    const [loading, setLoading]   = useState(false)

    const getToken = () => localStorage.getItem('tokenRenaissance')

    // Fetch XP dari backend
    const fetchXp = useCallback(async () => {
        try {
            const res = await API.get('/xp', {
                headers: { Authorization: `Bearer ${getToken()}` },
            })
            setXp(res.data.xp)
            setLevel(res.data.level)
            setXpToNext(res.data.xp_to_next)
            setXpInLevel(res.data.xp_in_level)
        } catch {
            // silent fail
        }
    }, [])

    useEffect(() => {
        fetchXp()
    }, [fetchXp])

    /**
     * Tambah XP setelah selesai 1 bab.
     *
     * @param {Object} params
     * @param {number} params.jumlahSalah  – total jawaban salah dalam bab ini
     * @param {number} [params.totalSoal]  – total soal (opsional)
     * @param {number} [params.modulId]    – modul_id (opsional)
     *
     * @returns {{ xpDapat, xpTotal, levelBaru, levelNaik, xpToNext }}
     */
    const tambahXp = async ({ jumlahSalah = 0, totalSoal, modulId } = {}) => {
        setLoading(true)
        try {
            const body = { jumlah_salah: jumlahSalah }
            if (totalSoal !== undefined) body.total_soal = totalSoal
            if (modulId   !== undefined) body.modul_id   = modulId

            const res = await API.post('/xp/tambah', body, {
                headers: { Authorization: `Bearer ${getToken()}` },
            })

            const { xp_didapat, xp_total, level_sekarang, level_naik, xp_to_next } = res.data

            setXp(xp_total)
            setLevel(level_sekarang)
            setXpToNext(xp_to_next)
            setXpInLevel(xp_total - ((level_sekarang - 1) * 1000))

            return {
                xpDapat:   xp_didapat,
                xpTotal:   xp_total,
                levelBaru: level_sekarang,
                levelNaik: level_naik,
                xpToNext:  xp_to_next,
            }
        } catch {
            return null
        } finally {
            setLoading(false)
        }
    }

    return { xp, level, xpToNext, xpInLevel, loading, fetchXp, tambahXp }
}

export default useXp
