/* eslint-disable react-hooks/exhaustive-deps */
/**
 * ModulPage.jsx
 * Generalisasi dari ModulMTK.jsx dan ModulPKN.jsx.
 *
 * Menerima `mapelConfig` (satu entry dari MAPEL_LIST) sebagai prop.
 * Data soal di-load secara lazy dari `mapelConfig.dataFile`.
 *
 * Untuk menambah halaman mapel baru, cukup daftarkan di mapelConfig.js
 * dan Router.jsx akan otomatis menggunakan komponen ini.
 */
import { useState, useEffect } from 'react'
import NavDashboard from '../components/NavDasboard'
import Search from '../assets/icon/searchIcon.svg'
import Notif from '../assets/icon/notifIcon.svg'
import rBottom from '../assets/icon/rowBottom.svg'
import ProgressBar from '../components/ProgressBar'
import PathTimeline from '../components/PathTimeline'
import ProgressHook from '../Hook/ProgressHook'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import PopUpModul from '../components/ModulComponent/PopUpModul'
import PopUpAccount from '../components/PopUpAccount'
import { Link } from 'react-router-dom'
import SkeletonNavbar from '../components/SkeletonLoading/DashboardPage/SkeletonNavbar'
import { useUser } from '../Context/UserContext'

const ModulPage = ({ mapelConfig }) => {
    const [isAccountOpen, setIsAccountOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [selectedModulIndex, setSelectedModulIndex] = useState(0)
    const [soalSelesai, setSoalSelesai] = useState([])
    const [initialSoalIndex, setInitialSoalIndex] = useState(0)
    // Data soal di-load secara lazy dari dataFile di mapelConfig
    const [modulData, setModulData] = useState([])

    const { user } = useUser()
    const { countTotalProgress, fetchProgress, updateProgress, isLoading, dataProgress, error } =
        ProgressHook()

    // Load data soal dari file secara lazy
    useEffect(() => {
        if (!mapelConfig?.dataFile) return
        mapelConfig.dataFile().then((mod) => {
            // File data mengekspor: export default [{ id, mapel, modul: [...] }]
            const raw = mod.default ?? mod
            setModulData(Array.isArray(raw[0]?.modul) ? raw[0].modul : [])
        })
    }, [mapelConfig])

    useEffect(() => {
        fetchProgress()
    }, [])

    const totalProgressValue =
        countTotalProgress()[mapelConfig?.progressKey] ?? 0

    const handleStartModule = (moduleIndex) => {
        setSelectedModulIndex(moduleIndex)
        const modulProgress = dataProgress.find(
            (p) => p.modul_id === modulData[moduleIndex]?.id
        )
        const lastSoalIndex = modulProgress?.soal_selesai?.length || 0
        setInitialSoalIndex(lastSoalIndex)
        setSoalSelesai(modulProgress?.soal_selesai || [])
        setIsPopupOpen(true)
    }

    const handleSoalSelesai = async (soalData) => {
        const newSoalSelesai = [...soalSelesai, soalData.soalId]
        setSoalSelesai(newSoalSelesai)
        const modulId = modulData[selectedModulIndex]?.id
        const totalSoal = modulData[selectedModulIndex]?.soal?.length
        await updateProgress(modulId, newSoalSelesai, totalSoal)
    }

    const handleBabSelesai = async (modulIndex) => {
        const modulId = modulData[modulIndex]?.id
        const bab = modulData[modulIndex]?.bab
        const totalSoal = modulData[modulIndex]?.soal?.length
        await updateProgress(modulId, soalSelesai, totalSoal, bab)
        await fetchProgress()
        setSoalSelesai([])
        setInitialSoalIndex(0)
    }

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
                                        <button className="lg:bg-[#3b2a23] transition-all duration-300 hover:-translate-x-1 flex flex-row items-center gap-2 lg:ml-1 text-[#3b2a23] lg:text-white px-6 py-2 rounded-full">
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

                        {/* Hero banner mapel */}
                        <div className="flex flex-row justify-center items-center mt-10">
                            <div className="relative flex flex-col w-full md:w-full lg:w-250 h-70 py-2 rounded-2xl px-7 md:px-15 bg-icon">
                                <h1 className="text-[#F8F3E0] text-3xl md:text-5xl lg:text-6xl mt-10 font-semibold font-monstserrat text-center">
                                    {mapelConfig?.namaMapel}
                                </h1>
                                <div className="absolute flex flex-row self-center bottom-25 gap-3 w-[75%]">
                                    {isLoading ? (
                                        <div className="w-full">
                                            <Skeleton
                                                height={18}
                                                style={{ borderRadius: '2.5rem', width: '100%' }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full flex flex-row items-center gap-3">
                                            <ProgressBar
                                                value={totalProgressValue}
                                                max={100}
                                                bgColor="bg-coffe"
                                            />
                                            <p className="text-white font-semibold font-monstserrat">
                                                {totalProgressValue}%
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Timeline bab */}
                        <PathTimeline
                            modulData={modulData}
                            mapelName={mapelConfig?.progressKey ?? ''}
                            modulProgress={dataProgress}
                            isProgressLoading={isLoading || modulData.length === 0}
                            progressError={error}
                            onStartModule={handleStartModule}
                        />
                    </div>
                </div>
            </div>

            {/* Popup soal */}
            {isPopupOpen && modulData.length > 0 && (
                <PopUpModul
                    key={selectedModulIndex}
                    modulData={modulData}
                    modulIndex={selectedModulIndex}
                    onClose={() => {
                        setIsPopupOpen(false)
                        window.location.reload()
                    }}
                    onBabSelesai={handleBabSelesai}
                    onSoalSelesai={handleSoalSelesai}
                    initialSoalIndex={initialSoalIndex}
                />
            )}
            <br />
            <br />
            <br />
        </>
    )
}

export default ModulPage
