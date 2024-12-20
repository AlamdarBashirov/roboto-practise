import React from 'react'
import style from './DummyCard.module.scss'

const DummyCard = ({item, addBasket, addWish}) => {
  return (
    <div>
        <img src={item.thumbnail} alt={item.title} />
        <p>{item.title}</p>
        <p>${item.price}</p>
        <div className={style.buttons}>
            <button onClick={addBasket}>Add Basket</button>
            <button onClick={addWish}>Add Wishlist</button>
        </div>
    </div>
  )
}

export default DummyCard