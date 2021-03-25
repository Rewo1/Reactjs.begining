import React from 'react'
import Footer from './Footer'
import Carousel from './Carousel'
import Product from './Product'
import Trending from './Trending'
import Navbar from './Navbar'

function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <Product />
            <Trending/>
            <Footer />

        </>
    )
}

export default Home
