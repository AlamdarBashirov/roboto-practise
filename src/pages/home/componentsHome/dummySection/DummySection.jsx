import React, { useEffect } from 'react'
import style from './DummySection.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk, postBasketThunk, postWishlist, postWishlistThunk } from '../../../../redux/reducers/productsSlice'
import DummyCard from '../../../../componnets/cards/dummycards/DummyCard'

const DummySection = () => {

    const dispatch = useDispatch()

    const products = useSelector((state) => state.products.products)
    const loading = useSelector((state) => state.products.loading)
    const error = useSelector((state) => state.products.error)

    const addWish = (item) => {
        dispatch(postWishlistThunk(item))
    }

    const addBasket = (item) => {
        dispatch(postBasketThunk(item))
    }

    useEffect(() => {
        dispatch(getProductsThunk())
    }, []);

    if (error) return <h1>Xeta Bas Verdi</h1>
    if (loading) return <h1>Yuklenir</h1>
  return (
    <div className={style.section}>
        <div className={style.container}>
            {products && products.map((item) => <DummyCard item={item} addBasket={() => addBasket(item)}  addWish={() => addWish(item)} />)}
        </div>
    </div>
  )
}

export default DummySection