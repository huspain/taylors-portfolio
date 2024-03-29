// src/components/Navigation.js
import React from 'react';
import logo from '../assets/logo.png'
import { useEffect } from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import { useLocation } from 'react-router-dom'


// Website navigation section featuring site title, logo, and navigation menu
function Navigation() {
    // retreives the current state
    const location = useLocation();
    const state = location.state;
    let activeMenu = false;

    // Toggles the menu to set and disable active status. When active, the menu displays
    const menuToggle = () => {
        activeMenu = !activeMenu;
        let navigation = document.getElementById('navigation');
        let mainMenu = document.getElementById('main-menu');
        if (activeMenu) {
            navigation.classList.add('active');
            mainMenu.classList.add('active');
        }
        else {
            navigation.classList.remove('active');
            mainMenu.classList.remove('active');
        }
    }

    // Initials a click event for the navigation toggle. Applies after a menu item is clicked.
    const menuClick = () => {
        var navToggle = document.querySelector('#nav-toggle');
        navToggle.click();
    }
    return (
        <div className="navigation" id='navigation'>
            <div className="container main-nav">
                <div className="row">
                    <div className="col-4 d-flex justify-content-center flex-column">
                        <div className="name-wrap">
                            <Link to='/' style={{color: '#000000'}}>
                                <div className='typewriter'>
                                    <span className='accent'>Taylor N. White</span>
                                </div>
                                <span className='header' style={{fontSize: 14}}>Author | Illustrator</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center flex-column">
                        <div className="logo-container text-center">
                            <Link to='/'>
                                <img src={logo} className="logo"/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center flex-column">
                        <div className='toggle-container text-right'>
                            <div id='nav-toggle' className='nav-toggle' onClick={menuToggle} >
                                <div className="bar top"></div>
                                <div className="bar middle"></div>
                                <div className="bar bottom"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-menu" id='main-menu'>
                <ul>
                    <li>
                        <Link to='/#' onClick={menuClick} state={state}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='#about' onClick={menuClick} state={state}>About</Link>
                    </li>
                    <li>
                        <Link to='#contact' onClick={menuClick} state={state}>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;

