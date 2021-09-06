import React from 'react';
import './BookCard.css'

const BookCard = ({
    alt,
    title,
    image,
    pageCount,
    publisher,
    published,
    authors
}) => {

    return (
        <div data-testid="book-card" className="book-card__container">
            <div className="book-card__image-content">
                <img className="book-card__image" src={image} alt={alt} />
            </div>
            <div className="book-card__book-content">
                <div>
                    <h1 className="book-card__title">{title}</h1>
                    <div className="book-card__authors">
                        {authors && authors.map((author, index) => (
                            <p key={index} className="book-card__author">{author}</p>
                        ))}
                    </div>
                </div>
                <div className="book-card__description">
                    <p>{pageCount} páginas</p>
                    <p>{publisher}</p>
                    <p>Publicado em {published}</p>
                </div>
            </div>
        </div>
    )
}

export default BookCard