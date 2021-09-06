import { useState, useEffect } from 'react'
import { api } from '../api'
import { useParams } from 'react-router-dom'

export function useBooks() {
    const [books, setBooks] = useState([])
    const [book, setBook] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        getBooks()
    }, [currentPage])

    useEffect(() => {
        getBookById()
    }, [id])

    async function getBooks() {
        await api.get(`/books?page=${currentPage}&amount=12`)
            .then(response => {
                if (response.data) {
                    setBooks(response.data)
                    setLoading(false)
                }
            })
            .catch((error) => {
                const { errors: { message } } = error.response.data
                setErrors(message)
            })
    }

    async function getBookById() {
        await api.get(`/books/${id}`)
            .then(response => {
                if (response.data) {
                    setBook(response.data)
                    setLoading(false)
                }
            })
            .catch((error) => {
                const { errors: { message } } = error.response.data
                setErrors(message)
            })
    }

    function handleNextPage() {
        if (currentPage < books.totalPages) setCurrentPage(currentPage + 1)
    }

    function handlePreviousPage() {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    return {
        books,
        book,
        currentPage,
        errors,
        handleNextPage,
        handlePreviousPage,
        getBookById,
        loading
    }
}
