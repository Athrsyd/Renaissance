import React from 'react'
import { useState } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'

const CommunityHook = () => {
    const [communities, setCommunities] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [searchResults, setSearchResults] = useState([])
    // const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const fetchCommunities = async () => {
        try {
            setIsLoading(true)
            const token = localStorage.getItem('token')
            const response = await API.get('/communities', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setCommunities(response.data.data)
        } catch (error) {
            console.error('Error fetching communities:', error)
            setError(error.response?.data?.message || 'Gagal membuat komunitas')
            setCommunities([])
        } finally {
            setIsLoading(false)
        }
    }

    const createCommunity = async (name, image_path = null) => {
        setIsLoading(true)
        try {
            const token = localStorage.getItem('token')
            const response = await API.post('/communities', { name, image_path }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            fetchCommunities()
            window.location.reload()
            return response.data.data
        } catch (error) {
            console.error('Error creating community:', error)
            setError(error.response?.data?.message || 'Gagal membuat komunitas')
            return null
        } finally {
            setIsLoading(false)
        }
    }

    const searchCommunities = async (query = '') => {
        setIsLoading(true)
        setError(null)
        try {
            const token = localStorage.getItem('token')
            const response = await API.get(`/communities/search?name=${encodeURIComponent(query)}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setSearchResults(response.data.data)
            console.log("Search results:", response.data.data);
        }
        catch (error) {
            console.error('Error searching communities:', error)
            setError(error.response?.data?.message || 'Gagal mencari komunitas')
            setSearchResults([])
        }
        finally {
            setIsLoading(false)
        }
    }

    const fetchPopularCommunities = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const token = localStorage.getItem('token')
            const response = await API.get(`/communities/search?name=`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            // Sort by member count descending
            const sorted = response.data.data.sort((a, b) => 
                (b.members_count || 0) - (a.members_count || 0)
            )
            setSearchResults(sorted)
            console.log("Popular communities (sorted):", sorted);
        }
        catch (error) {
            console.error('Error fetching popular communities:', error)
            setError(error.response?.data?.message || 'Gagal mengambil komunitas popular')
            setSearchResults([])
        }
        finally {
            setIsLoading(false)
        }
    }


    const joinCommunity = async (communityId) => {
        try {
            setIsLoading(true)
            const token = localStorage.getItem('token')
            await API.post(`/communities/${communityId}/join`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            searchCommunities()
            fetchCommunities()
        } catch (error) {
            console.error('Error joining community:', error)
            setError(error.response?.data?.message || 'Gagal bergabung dengan komunitas')
        }
        finally {
            setIsLoading(false)
        }
    }

    const leaveCommunity = async (communityId) => {
        try {
            setIsLoading(true)
            const token = localStorage.getItem('token')
            await API.post(`/communities/${communityId}/leave`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            searchCommunities()
            fetchCommunities()
        } catch (error) {
            console.error('Error leaving community:', error)
            setError(error.response?.data?.message || 'Gagal keluar dari komunitas')
        }
        finally {
            setIsLoading(false)
        }
    }


    return {
        
        communities,
        searchResults,
        isLoading,
        error,

        fetchCommunities,
        createCommunity,
        searchCommunities,
        fetchPopularCommunities,
        joinCommunity,
        leaveCommunity,

    }
}

export default CommunityHook