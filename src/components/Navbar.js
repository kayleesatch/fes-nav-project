import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = ({ user, logout, register, login }) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <FontAwesomeIcon icon={faCode} className="navbar__icon" />
                <span className="navbar__text">
                    <strong>Frontend</strong> Simplified
                </span>
            </div>
            <div className="navbar__auth">
                {user && user.email ? (
                    <>
                    <span className="navbar__user">{user.email}</span>
                    <button className="email__character" onClick={logout}>
                        {user?.email[0].toUpperCase()}
                    </button>
                    </>
                ) : (
                    <>
                    <button onClick={register} className="navbar__btn">Register</button>
                    <button onClick={login} className="navbar__btn">Login</button>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar