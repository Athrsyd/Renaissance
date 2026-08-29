/* eslint-disable react-hooks/exhaustive-deps */
/**
 * ModulPage.jsx
 * Generalisasi dari ModulMTK.jsx dan ModulPKN.jsx.
 *
 * Menerima `mapelConfig` (satu entry dari MAPEL_LIST) sebagai prop.
 *
 * PERUBAHAN: Data modul & soal kini diambil dari backend API, bukan dari file statis.
 *   GET /api/v1/mapel/{mapelBackend}/kelas/{kelas}/modules  → daftar modul (id, bab, judul)
 *   GET /api/v1/modules/{modul_id}/soal                    → soal lengkap per modul
 *
 * Saat user klik "Mulai", soal baru di-fetch untuk modul tersebut,
 * kemudian navigate ke QuizPage dengan data soal terlampir di state.
 */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavDashboard from '../components/NavDasboard'
import Search from '../assets/icon/searchIcon.svg'
import Notif from '../assets/icon/notifIcon.svg'
import rBottom from '../assets/icon/rowBottom.svg'
import PathTimeline from '../components/PathTimeline'
import ProgressHook from '../Hook/ProgressHook'
import PopUpAccount from '../components/PopUpAccount'
import { Link } from 'react-router-dom'
import SkeletonNavbar from '../components/SkeletonLoading/DashboardPage/SkeletonNavbar'
import { useUser } from '../Context/UserContext'
import API from '../services/api'

const ModulPage = ({ mapelConfig }) => {
    const [isAccountOpen, setIsAccountOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [modulData, setModulData] = useState([])       // daftar modul dari API (id, bab, judul)
    const [modulLoading, setModulLoading] = useState(false)
    const [startingBab, setStartingBab] = useState(1)
    const [startingModul, setStartingModulLoading] = useState(false)

    const navigate = useNavigate()
    const { user } = useUser()
    const { fetchProgress, isLoading, dataProgress, error } = ProgressHook()

    const getToken = () => localStorage.getItem('tokenRenaissance')

    // ── Load daftar modul dari API ──────────────────────────────────────────
    useEffect(() => {
        if (!mapelConfig?.mapelBackend || !mapelConfig?.kelas) return

        const fetchModuls = async () => {
            setModulLoading(true)
            try {
                const res = await API.get(
                    `/mapel/${encodeURIComponent(mapelConfig.mapelBackend)}/kelas/${mapelConfig.kelas}/modules`,
                    { headers: { Authorization: `Bearer ${getToken()}` } }
                )
                setModulData(Array.isArray(res.data?.data) ? res.data.data : [])
            } catch {
                setModulData([])
            } finally {
                setModulLoading(false)
            }
        }

        fetchModuls()
    }, [mapelConfig?.mapelBackend, mapelConfig?.kelas])

    // ── Load progress ───────────────────────────────────────────────────────
    useEffect(() => {
        fetchProgress()
    }, [])

    // ── Ambil starting_bab dari placement test ──────────────────────────────
    useEffect(() => {
        const fetchStartingBab = async () => {
            try {
                const res = await API.get('/placement/status', {
                    headers: { Authorization: `Bearer ${getToken()}` },
                })
                setStartingBab(res.data.starting_bab ?? 1)
            } catch {
                setStartingBab(1)
            }
        }
        fetchStartingBab()
    }, [])

    // ── Handler: mulai modul ─────────────────────────────────────────────────
    // Fetch soal terlebih dahulu sebelum navigate ke QuizPage
    const handleStartModule = async (moduleIndex) => {
        const modul = modulData[moduleIndex]
        if (!modul?.id) return

        setStartingModulLoading(true)
        try {
            // Fetch soal untuk modul ini dari backend
            const res = await API.get(`/modules/${modul.id}/soal`, {
                headers: { Authorization: `Bearer ${getToken()}` },
            })
            const modulWithSoal = res.data?.data  // { id, bab, judul, soal: [...] }

            // Gabungkan semua modul ke dalam array dengan soal lengkap untuk modul yang dipilih
            // QuizPage membutuhkan array modulData dengan .soal di dalamnya
            const modulDataWithSoal = modulData.map((m, i) => {
                if (i === moduleIndex) {
                    return { ...m, soal: modulWithSoal?.soal ?? [] }
                }
                return { ...m, soal: [] }
            })

            // Ambil progress modul ini untuk lanjutkan di posisi terakhir
            const modulProgress = dataProgress.find((p) => p.modul_id === modul.id)
            const lastSoalIndex = modulProgress?.soal_selesai?.length || 0
            const soalSelesaiAwal = modulProgress?.soal_selesai || []

            // Gunakan URL dengan kelas eksplisit agar QuizPage tahu cara navigasi balik
            navigate(`/academy/kelas-${mapelConfig.kelas}/${mapelConfig.slug}/quiz`, {
                state: {
                    modulData: modulDataWithSoal,
                    modulIndex: moduleIndex,
                    initialSoalIndex: lastSoalIndex,
                    soalSelesaiAwal,
                    kelas: mapelConfig.kelas,
                    slug: mapelConfig.slug,
                },
            })
        } catch {
            alert('Gagal memuat soal. Coba lagi.')
        } finally {
            setStartingModulLoading(false)
        }
    }

    const isPageLoading = modulLoading || isLoading

    return (
        <>
            <NavDashboard />
            <div className="flex flex-col lg:ml-10 md:-ml-3 -ml-10 bg-white justify-center items-center overflow-x-hidden">
                <div className="flex flex-col lg:ml-10 md:ml-0 bg-white justify-center items-center">
                    <div className="flex flex-col w-full ml-9 lg:ml-10 md:ml-15 mt-2 lg:justify-center md:justify-center items-center">

                        {user ? (
                            <div className="flex flex-row w-full mx-auto mt-5 md:gap-0 lg:gap-2 justify-center gap-30 items-center">
                                {/* SEARCH + BACK */}
                                <div className="relative flex flex-row justify-center items-center gap-10">
                                    <Link to="/academy">
                                        <button className="lg:bg-[#3b2a23] transition-all duration-300 hover:-translate-x-1 flex flex-row 
                                        items-center gap-2 lg:ml-1 text-[#3b2a23] lg:text-white px-6 py-2 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20px"
                                                height="20px"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
                                                />
                                            </svg>
                                            Back
                                        </button>
                                    </Link>
                                    <input
                                        type="search"
                                        placeholder="Explore Lessons"
                                        className="bg-[#D5D4D4] hidden md:block text-center text-sm rounded-xl w-40 lg:w-150 md:w-90 h-10 outline-0"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <img
                                        src={Search}
                                        className="hidden md:block relative w-5 right-20"
                                        alt="search"
                                    />
                                </div>

                                {/* RIGHT MENU */}
                                <div className="-ml-5 flex flex-row items-center gap-5">
                                    <button>
                                        <img src={Notif} className="w-6 mt-2" alt="Notifikasi" />
                                    </button>
                                    <div className="w-10 h-10 bg-bistre rounded-full flex items-center justify-center">
                                        <h1 className="text-white font-bold">
                                            {user?.name?.charAt(0) || 'U'}
                                        </h1>
                                    </div>
                                    <button
                                        onClick={() => setIsAccountOpen(!isAccountOpen)}
                                        className="cursor-pointer"
                                    >
                                        <img
                                            src={rBottom}
                                            className={`w-5 transition ${isAccountOpen ? 'rotate-180' : ''}`}
                                            alt="akun"
                                        />
                                    </button>
                                    <PopUpAccount
                                        Username={user}
                                        Email={user}
                                        isOpen={isAccountOpen}
                                        onClose={() => setIsAccountOpen(false)}
                                    />
                                </div>
                            </div>
                        ) : (
                            <SkeletonNavbar />
                        )}

                        {/* Loading overlay saat fetch soal */}
                        {startingModul && (
                            <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
                                <div className="bg-white rounded-2xl px-8 py-6 text-center shadow-xl">
                                    <p className="text-bistre font-semibold">Memuat soal...</p>
                                </div>
                            </div>
                        )}

                        {/* Error fetch modul */}
                        {!modulLoading && modulData.length === 0 && !isLoading && (
                            error ? (
                                <p className="mt-10 text-red-500 text-sm">{error}</p>
                            ) : (
                                <p className="mt-10 text-gray-500 text-sm">
                                    Belum ada modul untuk mata pelajaran ini.
                                </p>
                            )
                        )}

                        {/* Timeline bab */}
                        <PathTimeline
                            modulData={modulData}
                            mapelName={mapelConfig?.mapelBackend?.toLowerCase() ?? ''}
                            modulProgress={dataProgress}
                            isProgressLoading={isPageLoading || modulData.length === 0}
                            progressError={error}
                            onStartModule={handleStartModule}
                            startingBab={startingBab}
                        />
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
        </>
    )
}

export default ModulPage
