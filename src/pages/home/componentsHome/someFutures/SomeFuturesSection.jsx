import React from 'react'
import style from './SomeFuturesSection.module.scss'
import { FaRegUser } from "react-icons/fa";


const SomeFuturesSection = () => {
  return (
    <div className={style.section}>
        <div className={style.container}>
            <div className={style.sectionName}>
                <h1>Some Features that Made us Unique</h1>
                <span>Who are in extremely love with eco friendly system.</span>
            </div>
            <div className={style.cardBox}>
                <div className={`${style.card} ${style.expert}`}>
                    <div className={style.cardName}>
                    <FaRegUser />
                    <h5>Expert Technicians</h5>
                    </div>
                    <div className={style.cardContent}>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={`${style.card} ${style.expert}`}>
                    <div className={style.cardName}>
                    <FaRegUser />
                    <h5>Expert Technicians</h5>
                    </div>
                    <div className={style.cardContent}>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={`${style.card} ${style.expert}`}>
                    <div className={style.cardName}>
                    <FaRegUser />
                    <h5>Expert Technicians</h5>
                    </div>
                    <div className={style.cardContent}>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={`${style.card} ${style.expert}`}>
                    <div className={style.cardName}>
                    <FaRegUser />
                    <h5>Expert Technicians</h5>
                    </div>
                    <div className={style.cardContent}>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={`${style.card} ${style.expert}`}>
                    <div className={style.cardName}>
                    <FaRegUser />
                    <h5>Expert Technicians</h5>
                    </div>
                    <div className={style.cardContent}>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                <div className={`${style.card} ${style.expert}`}>
                    <div className={style.cardName}>
                    <FaRegUser />
                    <h5>Expert Technicians</h5>
                    </div>
                    <div className={style.cardContent}>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SomeFuturesSection