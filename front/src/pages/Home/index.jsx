import React from 'react'
import Spring from '../../components/Spring'
import Genre from '../../components/Genre'
import NewArrival from '../../components/NewArrival'
import { ColorContext } from '../../context/ColorContextProvider'
import BestSellers from '../../components/BestSellers'
import LatestBlog from '../../components/LatestBlog'
import Subscribe from '../../components/Subscribe'

const Home = () => {
  return (
    <div>
      <Spring/>
      <Genre/>
      <NewArrival/>
      <BestSellers/>
      <LatestBlog/>
      <Subscribe/>
    </div>
  )
}

export default Home
