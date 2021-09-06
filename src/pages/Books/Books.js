import React from 'react';
import { Link, useLocation } from 'react-router-dom'

import './Books.css';
import Header from '../../components/Header/Header'
import BookCard from '../../components/BookCard/BookCard';
import Pagination from '../../components/Pagination/Pagination';
import { useBooks } from '../../hooks/useBooks'
import { useAuthContext } from '../../context/authContext'


const Books = () => {
    const location = useLocation()
    const userName = localStorage.getItem('userName')
    const { handleLogout } = useAuthContext()

    const {
        books,
        currentPage,
        handleNextPage,
        handlePreviousPage
    } = useBooks()

    return (
        <div className="container-books">
            <Header 
                userName={userName} 
                handleLogout={handleLogout}
            />
            <div className="books__content">
                {books.data && books.data.map(book => (
                    <Link
                        style={{ 
                            textDecoration: 'none',
                            marginBottom: "1.5rem"
                        }}
                        to={{
                            pathname: `book/${book.id}`,
                            state: { background: location }
                        }}
                    >
                        <BookCard
                            title={book.title}
                            image={book.imageUrl}
                            alt={book.title}
                            pageCount={book.pageCount}
                            publisher={book.publisher}
                            published={book.published}
                            authors={book.authors}
                        />
                    </Link>
                ))}
            </div>
            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                totalPages={books.totalPages}
                currentPage={currentPage}
            />
        </div >
    )
}

export default Books