import './Logo.css'
import LogoIoLight from '../../assets/images/logo.png'
import LogoIoDark from '../../assets/images/logo-dark.png'

const Logo = ({ color = "light" }) => {
    return (
        <div data-testid="logo" className="logo__container">
            {color === "light" ?
                <img className="logo__image" src={LogoIoLight} alt="ioasys" />
                :
                <img className="logo__image" src={LogoIoDark} alt="ioasys" />
            }
            <span
                className={`logo__text ${(color === "light") ? ' logo__text--light' : ''}`}>
                Books
            </span>
        </div>
    )
}

export default Logo