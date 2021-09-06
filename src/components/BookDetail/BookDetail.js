import './BookDetail.css'

const BookDetail = ({ book }) => {
    return (
        <>
            {book &&
                <div className="book-detail__container">
                    <img src={book.imageUrl} alt={book.title} />
                    <div className="book-detail__infor">
                        <h1 className="book-detail__title">
                            {book.title}
                        </h1>
                        {book.authors.map(author => (
                            <span className="book-detail__authors">{author}, </span>
                        ))}
                        <div className="book-detail__informations">
                            <span>Informações</span>
                            <div>
                                <strong>Páginas</strong> <p>{book.pageCount} páginas</p>
                            </div>
                            <div>
                                <strong>Editora</strong> <p>{book.publisher}</p>
                            </div>
                            <div>
                                <strong>Publicação</strong> <p>{book.published}</p>
                            </div>
                            <div>
                                <strong>Idioma</strong> <p>{book.language}</p>
                            </div>
                            <div>
                                <strong>Título Original</strong> <p>{book.title}</p>
                            </div>
                            <div>
                                <strong>ISBN-10</strong> <p>{book.isbn10}</p>
                            </div>
                            <div>
                                <strong>ISBN-13</strong> <p>{book.isbn13}</p>
                            </div>
                        </div>
                        <div className="book-detail__review">
                            <span>Resenha da editora</span>
                            <p><q>{book.description}</q></p>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default BookDetail