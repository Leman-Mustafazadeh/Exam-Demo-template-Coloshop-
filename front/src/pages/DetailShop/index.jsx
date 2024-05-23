import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getOne } from '../../API'
import styles from "./index.module.scss"
const DetailShop = () => {
  const {id} = useParams()
  const [getData,setGetdata] = useState({
    imgSrc:'',
    name:'',
    price:'',
    discount:''
  })

  useEffect(()=>{
    getOne(id).then((res)=>{
      setGetdata(res.data.data)
    })
  },[id])
  return (
    <div className={styles.detail}>
      <img src={getData.imgSrc} alt="" />
      <h3>{getData.name}</h3>
      <p>PRICE:${getData.price}</p>
      <p>{getData.discount}</p>
      <button><Link to={"/"} style={{textDecoration:"none"}}>Go back</Link></button>

    </div>
  )
}

export default DetailShop
