import React, { useRef, useState } from 'react'
import { UserRound } from 'lucide-react'
import CommunityHook from '../../Hook/CommunityHook'

const CreateCommunity = ({ isOpen, onClose }) => {
    const fileInputRef = useRef(null)
    const [communityName, setCommunityName] = useState('')
    const [photoName, setPhotoName] = useState('')
    const [error, setError] = useState('')
    const { createCommunity, isLoading } = CommunityHook()

    if (!isOpen) {
        return null
    }

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    const handleChoosePhoto = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0]
        if (!selectedFile) {
            return
        }
        setPhotoName(selectedFile.name)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')

        if (!communityName.trim()) {
            setError('Community name is required')
            return
        }

        const result = await createCommunity(communityName, photoName || null)
        
        if (result) {
            // Successfully created
            onClose()
            setCommunityName('')
            setPhotoName('')
        } else {
            setError('Failed to create community')
        }
    }

    return (
        <div
            className='fixed inset-0 z-50 bg-black/45 backdrop-blur-[2px] flex items-center justify-center p-4 sm:p-6'
            onClick={handleOverlayClick}
            role='dialog'
            aria-modal='true'
            aria-label='Create new community'
        >
            <div className='w-full max-w-md md:max-w-xl rounded-3xl border-2 border-[#AF8D66] bg-[#5C4A47] px-4 py-5 sm:px-8 sm:py-8 text-[#F5EFE8] shadow-2xl'>
                <h2 className='text-center text-2xl sm:text-3xl font-semibold tracking-wide'>Make New Community</h2>

                <form onSubmit={handleSubmit} className='mt-5 sm:mt-6'>
                    <div className='flex flex-col items-center'>
                        <button
                            type='button'
                            onClick={handleChoosePhoto}
                            className='h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[#D9D9D9] text-[#6D5B56] flex items-center justify-center hover:opacity-90 transition duration-300'
                            aria-label='Choose photo'
                        >
                            <UserRound size={42} />
                        </button>

                        <button
                            type='button'
                            onClick={handleChoosePhoto}
                            className='mt-3 text-base sm:text-lg font-medium hover:text-[#D9C3A2] transition duration-300'
                        >
                            Choose Photos
                        </button>

                        <input
                            ref={fileInputRef}
                            type='file'
                            accept='image/*'
                            onChange={handleFileChange}
                            className='hidden'
                        />

                        {photoName && (
                            <p className='mt-1 text-xs sm:text-sm text-[#E8D8C5] text-center truncate max-w-full'>
                                {photoName}
                            </p>
                        )}
                    </div>

                    <div className='mt-5 sm:mt-6'>
                        <label htmlFor='communityName' className='sr-only'>Community Name</label>
                        <input
                            id='communityName'
                            type='text'
                            value={communityName}
                            onChange={(event) => setCommunityName(event.target.value)}
                            placeholder='Community Name...'
                            className='w-full rounded-2xl border border-icon bg-[#7B645A] px-4 py-3 text-xl sm:text-3xl text-[#E9DED2] placeholder:text-[#CDB9A4] outline-none focus:border-coffe'
                            disabled={isLoading}
                            required
                        />
                    </div>

                    {error && (
                        <p className='mt-3 text-center text-sm text-red-300'>
                            {error}
                        </p>
                    )}

                    <div className='mt-5 sm:mt-7 flex justify-center'>
                        <button
                            type='submit'
                            disabled={isLoading}
                            className='w-full max-w-xs rounded-2xl bg-[#AF8D66] px-6 py-3 text-2xl sm:text-2xl font-semibold text-[#F8F4EF] hover:bg-[#C39E74] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {isLoading ? 'Creating...' : 'Make Community'}
                        </button>
                    </div>

                    <button
                        type='button'
                        onClick={onClose}
                        className='mt-4 w-full text-center text-xs sm:text-sm text-[#E8D8C5] hover:text-white transition duration-300'
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateCommunity