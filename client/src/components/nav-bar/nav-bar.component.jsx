import React, {useState} from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <nav className="navbar-light navbar navbar-expand-sm  bg-light">
            <div className="container">
                <a className="navbar-brand font-weight-bold text-uppercase" href="#">Jude Gao</a>
                <button
                    onClick={() => {
                        setCollapsed(!collapsed)
                    }}
                    className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${ collapsed ? 'collapse' : ''} navbar-collapse`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-1 text-uppercase">
                            <Link to={'/'} className="nav-link" href="#">Home</Link>
                        </li>
                        <li className="nav-item mx-1 text-uppercase">
                            <Link
                                to={'/maintain'}
                                className={`nav-link`} href="#">Config</Link>
                        </li>
                        <li className='nav-item mx-1 bg-secondary text-uppercase'>
                            <a href="/resume.pdf" target={'_blank'} className={`nav-link text-light`}>Résumé</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default NavBar;