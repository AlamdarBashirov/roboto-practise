import React from 'react'
import style from './IntroSection.module.scss'

const IntroSection = () => {
  return (
    <div className={style.section}>
        <div className={style.container}>
            <div className={style.text}>
                <h1>Improved Production level with Robotics</h1>
                <span>Everyone wants the innovation through robotics</span>
                <button>VIEW DETAILS</button>
            </div>
            <div className={style.image}>
                <img src="https://preview.colorlib.com/theme/robotics/img/banner-img.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default IntroSection