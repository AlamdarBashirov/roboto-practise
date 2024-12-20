import React, { useEffect, useState } from 'react'
import style from './SectionOfBasket.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductsBasketThunk, getBasketProductsThunk } from '../../../../redux/reducers/basketSlice'
import BasketCard from '../../../../componnets/cards/basketCard/BasketCard'
import { getProductsThunk } from '../../../../redux/reducers/productsSlice'

const SectionOfBasket = () => {


    const dispatch = useDispatch()

    const products = useSelector((state) => state.basket.products)
    const loading = useSelector((state) => state.basket.loading)
    const error = useSelector((state) => state.basket.error)

    const deleteItem = (id) => {
        dispatch(deleteProductsBasketThunk(id))
    }

    useEffect(() => {
        dispatch(getBasketProductsThunk())
    }, [])

    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Xeta bas verdi</h1>

  return (
    <div className={style.section}>
        <div className={style.container}>
            {products && products.map((item) => <BasketCard item={item} deleteItem={() => deleteItem(item.id)} />)}
        </div>
    </div>
  )
}

export default SectionOfBasket