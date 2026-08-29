/**
 * ModulPageResolver.jsx
 *
 * Komponen penghubung: menerima `slug` dari route lama (/academy/{slug}),
 * lalu membaca kelas user dari API placement/status,
 * kemudian meneruskan ke ModulPage dengan mapelConfig yang tepat.
 *
 * Ini memastikan link lama dari dashboard tetap bekerja
 * tanpa perlu tahu kelas user di sisi router.
 */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MAPEL_LIST from '../Config/mapelConfig'
import API from '../services/api'
import ModulPage from './ModulPage'

const ModulPageResolver = ({ slug }) => {
    const navigate = useNavigate()
    const [mapelConfig, setMapelConfig] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const resolve = async () => {
            try {
                const token = localStorage.getItem('tokenRenaissance')
                const res = await API.get('/placement/status', {
                    headers: { Authorization: `Bearer ${token}` },
                })
                const kelas = res.data?.kelas ?? 10

                // Cari mapelConfig yang cocok dengan slug + kelas user
                const found = MAPEL_LIST.find(
                    (m) => m.slug === slug && m.kelas === Number(kelas)
                )

                if (found) {
                    setMapelConfig(found)
                } else {
                    // Fallback: ambil yang pertama dengan slug ini
                    const fallback = MAPEL_LIST.find((m) => m.slug === slug)
                    if (fallback) {
                        setMapelConfig(fallback)
                    } else {
                        navigate('/academy', { replace: true })
                    }
                }
            } catch {
                // Jika gagal fetch, gunakan kelas 10 sebagai default
                const fallback = MAPEL_LIST.find((m) => m.slug === slug && m.kelas === 10)
                if (fallback) {
                    setMapelConfig(fallback)
                } else {
                    navigate('/academy', { replace: true })
                }
            } finally {
                setLoading(false)
            }
        }

        resolve()
    }, [slug, navigate])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white">
                <p className="text-bistre font-semibold">Memuat halaman...</p>
            </div>
        )
    }

    if (!mapelConfig) return null

    return <ModulPage mapelConfig={mapelConfig} />
}

export default ModulPageResolver
