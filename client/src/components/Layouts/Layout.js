import React from 'react'
import Footer from './Footer.js'
import Header from './Header.js'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div className='content'>
        {children}
    </div>
    <Footer/>
    </>
  )
}

export default Layout