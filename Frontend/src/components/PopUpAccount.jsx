import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HookAuth from '../Hook/HookAuth'
import { Pencil } from 'lucide-react'

const PopUpAccount = ({ isOpen, onClose, Username, Email, onProfileUpdated }) => {
  const { handleLogout, isLoading, uploadProfilePicture, fetchUserData } = HookAuth()
  const fileInputRef = useRef(null)
  const [photoPreview, setPhotoPreview] = useState(null)

  useEffect(() => {
    if (Username?.photo_url) {
      setPhotoPreview(Username.photo_url)
    } else {
      setPhotoPreview(null)
    }
  }, [Username?.photo_url])

  if (!isOpen) return null

  const handlePhotoClick = () => {
    fileInputRef.current?.click()
  }

  const handleChangeFile = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validasi size
    if (file.size > 2 * 1024 * 1024) {
      alert('File terlalu besar, max 2 MB')
      return
    }

    // Preview lokal
    const reader = new FileReader()
    reader.onload = (evt) => {
      setPhotoPreview(evt.target?.result)
    }
    reader.readAsDataURL(file)

    // Upload ke backend
    try {
      console.log('📤 Uploading file:', file) // ← DEBUG
      await uploadProfilePicture(file)
      alert('Foto berhasil diupdate')

      // ========== REFRESH DATA USER DARI BACKEND ==========
      if (onProfileUpdated) {
        await onProfileUpdated()
      }

    } catch (error) {
      alert('Gagal upload foto')
      setPhotoPreview(Username?.photo_url || null)
    }


  }


  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div
        className="absolute right-2 top-14 w-[88vw] max-w-70 lg:right-40 lg:top-20 md:top-20 md:w-105 rounded-2xl bg-[#A88663] text-white shadow-2xl p-4 md:p-5"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start gap-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full bg-bistre shrink-0 flex items-center justify-center cursor-pointer group ">
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Profile"
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <h1 className="text-white text-lg md:text-2xl font-bold">
                {Username?.name?.charAt(0) || 'U'}
              </h1>
            )}

            <div
              onClick={handlePhotoClick}
              className="absolute -top-1 left-9 bg-white p-1 md:p-1.5 rounded-full border-[#A88663] border-2 hover:scale-110 transition cursor-pointer"
            >
              {isLoading ? (
                <div className="w-3 h-3 md:w-4 md:h-4 border-t border-bistre border-2 rounded-full animate-spin" />
              ) : (
                <Pencil className="w-3 h-3 md:w-4 md:h-4 text-bistre" />
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleChangeFile}
              disabled={isLoading}
            />
          </div>

          <div className="min-w-0 ml-2 mt-3">
            <h3 className="font-semibold text-sm md:text-sm leading-tight">
              {Username?.name || 'User'}
            </h3>
            <p className="text-xs md:text-sm text-white/95 break-all">
              {Email?.email || 'email@example.com'}
            </p>
          </div>
        </div>

        <div className="my-3 h-px bg-white/40"></div>

        <p className="text-sm md:text-base text-white/95">Your Accounts</p>
        <Link to="/login">
          <button
            type="button"
            className="mt-1 text-left text-xl hover:underline font-medium hover:text-bistre transition duration-300"
          >
            Change account
          </button>
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-1 block text-left text-xl font-medium hover:text-bistre transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default PopUpAccount
