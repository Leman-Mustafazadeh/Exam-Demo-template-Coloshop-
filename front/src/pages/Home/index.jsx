import React from 'react'
import ContextShops from '../../context/ContextShops'
import NewArrival from '../../components/NewArrival'
import Genre from '../../components/Genre'
import Products from '../../components/Products'
import BestSellers from '../../components/BestSellers'
import Blogs from '../../components/Blogs'
import Letter from '../../components/Letter'

const Home = () => {
  return (
    <div>
      <NewArrival/>
      <Genre/>
      <Products/>
      <BestSellers/>
      <Blogs/>
      <Letter/>
    </div>
  )
}

export default Home
