import React from 'react'
import style from './LastNewsSection.module.scss'

const LastNewsSection = () => {
  return (
    <div className={style.section}>
        <div className={style.container}>
            <div className={style.sectionName}>
                <h1>Latest News from our Blog</h1>
                <span>Who are in extremely love with eco friendly system.</span>
            </div>
            <div className={style.cardBox}>
                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/robotics/img/b1.jpg" alt="" />
                    <div className={style.buttons}>
                        <button>Travel</button>
                        <button>Life Style</button>
                    </div>
                    <h5><a href="">Portable latest Fashion for young women</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <span>31st January, 2018</span>
                </div>
                <div className={style.card}>
                    <img src="https://preview.colorlib.com/theme/robotics/img/b2.jpg" alt="" />
                    <div className={style.buttons}>
                        <button>Travel</button>
                        <button>Life Style</button>
                    </div>
                    <h5><a href="">Portable latest Fashion for young women</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <span>31st January, 2018</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LastNewsSection