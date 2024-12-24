import React from 'react'
import style from './Header.module.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className={style.header}>
        <div className={style.container}>
            <div className={style.logo}>
                <img src="https://preview.colorlib.com/theme/robotics/img/logo.png" alt="logo" />
            </div>
            <div className={style.navigation}>
                <ul>
                    <Link to='/'>
                    <li><a href="#">HOME</a></li>
                    </Link>
                    <Link to='/basket'>
                    <li><a href="#">BASKET</a></li>
                    </Link>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">DROPDOWN</a></li>
                </ul>
                <GiHamburgerMenu />
            </div>
        </div>
    </div>
    </>
  )
}

export default Header