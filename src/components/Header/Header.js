import React from 'react'
import Logo from '../Logo/Logo'
import './Header.css'
import LogoutIcon from '../../assets/images/logout.svg'

const Header = ({ userName, handleLogout }) => {
    

    return (
        <div data-testid="header" className="header">    
            <Logo color="dark" />
            <div className="header__profile">
                {userName && <p>Bem vindo, <strong>{userName}!</strong></p>}
                <button onClick={handleLogout}>
                    <img
                        className="header__logout-icon"
                        src={LogoutIcon}
                        alt='logout'
                    />
                </button>
            </div>
        </div>
    )
}

export default Header