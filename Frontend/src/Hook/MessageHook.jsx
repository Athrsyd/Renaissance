import { useState } from 'react'
import API from '../services/api'

const MessageHook = () => {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [message, setMessage] = useState('')

    const getMessages = async (communityId) => {
        setLoading(true)
        setError(null)
        try {
            const token = localStorage.getItem('token')
            console.log('Fetching messages for community:', communityId) 
            
            const response = await API.get(`/communities/${communityId}/messages`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log('Messages received:', response.data.data) 
            setMessages(response.data.data)
            setMessage('')
        } catch (error) {
            console.error('Error fetching messages:', error)
            console.error('Error response:', error.response?.data) 
            setError(error.response?.data?.message || 'Gagal mengambil pesan')
            setMessages([])
        } finally {
            setLoading(false)
        }
    }

    const sendMessage = async (communityId, chat) => {
        setLoading(true)
        setError(null)
        try {
            const token = localStorage.getItem('token')
            const response = await API.post(
                `/communities/${communityId}/messages`,
                { chat },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            setMessages([...messages, response.data.data])
            setMessage(response.data.message)
            return response.data.data
        } catch (error) {
            console.error('Error sending message:', error)
            setError(error.response?.data?.message || 'Gagal mengirim pesan')
            return null
        } finally {
            setLoading(false)
        }
    }


    const deleteMessage = async (messageId) => {
        setLoading(true)
        setError(null)
        try {
            const token = localStorage.getItem('token')
            const response = await API.delete(`/messages/${messageId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            setMessages(messages.filter(msg => msg.id !== messageId))
            setMessage(response.data.message)
            return true
        } catch (error) {
            console.error('Error deleting message:', error)
            setError(error.response?.data?.message || 'Gagal menghapus pesan')
            return false
        } finally {
            setLoading(false)
        }
    }

    return {
        messages,
        loading,
        error,
        message,
        getMessages,
        sendMessage,
        deleteMessage,
    }
}

export default MessageHook