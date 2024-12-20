import React from 'react'
import style from './BasketCard.module.scss'

const BasketCard = ({item, deleteItem}) => {
  return (
    <div className={style.card}>
        <img src={item.thumbnail} alt={item.title} />
        <p>{item.title}</p>
        <p>${item.price}</p>
        <div className={style.buttons}>
            <button onClick={deleteItem}>Sil</button>
        </div>
    </div>
  )
}

export default BasketCard