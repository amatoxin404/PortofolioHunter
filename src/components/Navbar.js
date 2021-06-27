import React, {useState} from 'react';
import { Link } from "react-scroll";
import logo from "../images/logo.png"

function Navbar() {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt=''/>
                {/* <h2>Rise Hunter</h2> */}
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} activeClass="active">home</Link></li>
                <li><Link to='features' smooth={true}>features</Link></li>
                <li><Link to='about' smooth={true}>Why</Link></li>
                <li><Link to='tekonomic' smooth={true}>tekonomics</Link></li>
                <li><a href='https://sites.google.com/view/risehunterroadmap/' smooth={true}>roadmap</a></li>
                <li><Link to='contact' smooth={true}>community</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
