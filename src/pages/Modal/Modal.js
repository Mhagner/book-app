import history from '../../history'
import BookDetail from '../../components/BookDetail/BookDetail';
import { useBooks } from '../../hooks/useBooks'
import CloseIcon from '../../assets/images/close.svg'

import "./Modal.css"

const Modal = () => {
    const { book, loading } = useBooks()

    if (loading) {
        return <h2>Loading...</h2>
    }

    const back = e => {
        e.stopPropagation();
        history.goBack();
    };

    return (
        <div className="modal__overlay">
            <div className="modal__container-button">
                <button
                    className="modal__buttom-close"
                    type="button"
                    onClick={back}
                >
                    <img src={CloseIcon} alt="close" />
                </button>
            </div>
            <div className="modal__content">
                <BookDetail book={book} />
            </div>
        </div >
    );
}

export default Modal