import { useState, useEffect } from 'react'

import { api } from '../api'
import history from '../history'

export function useAuth() {
    const [authenticate, setAuthenticate] = useState(false)
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`
            setAuthenticate(true)
        } 
        
        setLoading(false)
    }, [])

    async function handleSubmit(values) {
        await api.post('/auth/sign-in', {
            email: values.email,
            password: values.password
        })
            .then(response => {
                if (response.data) {
                    setAuthenticate(true)
                    localStorage.setItem('userName', response.data.name)
                    localStorage.setItem('token', response.headers['authorization'])
                    api.defaults.headers.Authorization = `Bearer ${response.headers['authorization']}`
                    history.push('/')
                }
            })
            .catch((error) => {
                const { errors: { message }} = error.response.data
                setErrors(message)
            })
    }

    function handleLogout() {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        api.defaults.headers.Authorization = undefined
        setAuthenticate(false)
        history.push('/login')
    }

    return {
        handleSubmit,
        handleLogout,
        authenticate,
        loading,
        errors
    }
}
