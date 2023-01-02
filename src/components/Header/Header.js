import { Close, Menu } from '@mui/icons-material';
import React, { useState, useEffect }  from 'react'
import './Header.css'
import {useNavigate} from 'react-router-dom'
function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => {
        setClick(false);
    }

    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    useEffect(() => {
        const allLi = document.querySelector('.close-li').querySelectorAll("li");
        function changeMenuActive() {
            allLi.forEach(n => n.classList.remove('mimo'));
            this.classList.add("mimo")
        }
        allLi.forEach( n => n.addEventListener('click', changeMenuActive))
    }, []);

    const Navigate = useNavigate();
  return (
    <div className={`Navbar-container ${show && "nav__black"}`}>
    <div className='navbar-left'>
    <h2 onClick={()=>{
        Navigate('/');
        closeMobileMenu();
    }}>
        Instagram
    </h2>
    <h3 onClick={handleClick}>{click ? <Close /> : <Menu /> }</h3>
    </div>
    <div className={click ? 'show-menu' : 'navbar-right'}>
    <ul className='close-li'>
        <li onClick={()=>{
            Navigate('/');
            closeMobileMenu();
        }}>
          Home
        </li>
        <li onClick={()=>{
            Navigate('/register');
            closeMobileMenu();
        }}>
          Register
        </li>
        <li onClick={()=>{
            Navigate('/login');
            closeMobileMenu();
        }}>
          Login
        </li>
    </ul>
    </div>
    </div>
  )
}

export default Header