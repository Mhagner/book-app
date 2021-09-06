import './Pagination.css';
import ArrowLeft from '../../assets/images/arrow-left.svg'
import ArrowRight from '../../assets/images/arrow-right.svg'

const Pagination = ({ 
    handlePreviousPage, 
    handleNextPage, 
    totalPages, 
    currentPage 
}) => {
    return (
        <div data-testid="pagination" className="pagination__container">
            <button
                className="pagination__button"
                onClick={handlePreviousPage}
            >
                <img
                    className="pagination__arrow-left"
                    src={ArrowLeft}
                    alt="arrow left"
                />
            </button>
            <p className="pagination__count">
                Página
                <strong>{currentPage}</strong> de
                <strong>{totalPages ? Math.round(totalPages) : 0}</strong>
            </p>
            <button
                className="pagination__button"
                onClick={handleNextPage}
            >
                <img
                    className="pagination__arrow-right"
                    src={ArrowRight}
                    alt="arrow right"
                />
            </button>
        </div>
    )
}

export default Pagination;