import React from 'react'
import Header from '../componnets/header/Header'
import Footer from '../componnets/footer/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default Layout