import React from 'react'
import { FaRegHeart } from "react-icons/fa6";
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
        <span>Copyright ©2024 All rights reserved | This template is made with <FaRegHeart /> by Colorlib</span>
    </div>
  )
}

export default Footer