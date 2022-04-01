import React from 'react'
import './Layout.css'
import { Link } from 'react-router-dom';
export default function Layout(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img className='navbar-logo' src="https://img.icons8.com/cotton/64/000000/unknown-error.png" alt='Unknown World logo' />
                    <a className="navbar-brand" href="/UnknownWorld">Unknown World</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/UnknownWorld">
                                <li className="nav-item">
                                    APOW
                                </li>
                            </Link>
                            <Link to="/UnknownWorld/APOD">
                            <li className="nav-item">
                                APOD
                            </li>
                            </Link>
                            <Link to="/UnknownWorld/MARS">
                            <li className="nav-item">
                                MARS
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            {props.children}

            <footer className="footer footer-expand-lg footer-dark bg-dark">
                <li className="footer-item">
                    <a className="nav-link active" aria-current="page" href="/About">About</a>
                </li>
                <li className="footer-item">
                    <a className="nav-link" href="/Privacy">Privacy</a>
                </li>
                <li className="footer-item">
                    <a className="nav-link" href="https://api.nasa.gov/" target="_blank" rel="noreferrer">Nasa API</a>
                </li>
                <li className="footer-item">
                    <a className="nav-link" href="https://twitter.com/GironLansdorp" target="_blank" rel="noreferrer">Social</a>
                </li>
            </footer>
        </React.Fragment>
    )
}