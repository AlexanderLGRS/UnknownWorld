import React from 'react'
import './Layout.css'
export default function Layout(props) {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img className='navbar-logo' src="https://img.icons8.com/cotton/64/000000/unknown-error.png" />
                    <a className="navbar-brand" href="#">Unknown World</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">APOW</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">APOD</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MARS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {props.children}

            <footer className="footer footer-expand-lg footer-dark bg-dark">
                <li className="footer-item">
                    <a className="nav-link active" aria-current="page" href="#">About</a>
                </li>
                <li className="footer-item">
                    <a className="nav-link" href="#">Privacy</a>
                </li>
                <li className="footer-item">
                    <a className="nav-link" href="#">Nasa API</a>
                </li>
                <li className="footer-item">
                    <a className="nav-link">Social</a>
                </li>
            </footer>
        </React.Fragment>
    )
}