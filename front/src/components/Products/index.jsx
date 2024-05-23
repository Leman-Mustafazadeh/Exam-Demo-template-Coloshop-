import React, { useContext, useEffect, useState } from 'react'
import styles from "./index.module.scss"
import { BasketContext, ColorContext, WishlistContext } from '../../context/ContextShops';
import { deleteOne } from '../../API';
import {Link} from "react-router-dom"
import Swal  from "sweetalert2"
const Products = () => {
  const {shops,setShops} = useContext(ColorContext)
  const {basket,setBasket} = useContext(BasketContext)
const {wishlist,setWishlist} = useContext(WishlistContext)
  const handleDelete=(id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOne(id)
        const del = shops.filter((x)=>x._id!==id)
        setShops(del)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

  const handleBasket=(demo)=>{
    const target = basket.find((x)=>x._id==demo._id)
    if(target){
      target.count+=1
      target.totalPrice= target.count*target.price
      setBasket([...basket])
      localStorage.setItem("basket",JSON.stringify([...basket]))
    }else{
      const newItem = {
        count:1,
      totalPrice:demo.price,
      ...demo
      }
      setBasket([...basket,newItem])
      localStorage.setItem("basket",JSON.stringify([...basket,newItem]))
    }
   
  }

const handleWishlist=(text)=>{
  const target = wishlist.find((x)=>x._id==text._id)
  if(target){
    const filtered = wishlist.filter((x)=>x._id!==target._id)
    setWishlist(filtered)
    localStorage.setItem("wishlist",JSON.stringify(filtered))
  }else{
    setWishlist([...wishlist,text])
    localStorage.setItem("wishlist",JSON.stringify([...wishlist,text]))
  }
}

const [filter,setFilter] = useState(shops)
const handleSubmit=(inpValue)=>{
  const search = shops.filter((x)=>x.name.toLowerCase().trim().includes(inpValue.toLowerCase().trim()))
  setFilter(search)
}
useEffect(()=>{
  setFilter(shops)
},[shops])


const sortByPrice=(value)=>{
  const sorted = [...filter]
  if(value=='a'){
    sorted.sort((a,z)=>a.price-z.price)
  }else if(value=='z'){
    sorted.sort((a,z)=>z.price-a.price)
  }setFilter(sorted)
}
  return (
    <section className={styles.products}>
      <div className="container">
        <h1>New Arrivals</h1>
        <div className={styles.prod_head}>
          <button>All</button>
          <button>WOMEN'S</button>
          <button>ACCESORIES</button>
          <button>MEN'S</button>
        </div>
        <div style={{margin:'20px 0'}}>
          <input type="text" placeholder='Search...' onChange={(e)=>handleSubmit(e.target.value)} />
          <select name="" id="" onChange={(e)=>sortByPrice(e.target.value)}>
            <option value="a">Min Price</option>
            <option value="z">Max Price</option>
          </select>
        </div>


        <div className={styles.prod_title}>
          {
            filter.map((item)=>{
              return(
               <div className={styles.prod_item}>
               <button style={{backgroundColor:'pink'}} onClick={()=>handleWishlist(item)}>{wishlist.find((x)=>x._id==item._id)? <i class="fa-regular fa-heart"></i>:<i class="fa-solid fa-heart"></i>}</button>
                 <img src={item.imgSrc} alt="" />
                <h5>{item.name}</h5>
                <p>${item.price}</p>
                <button onClick={()=>handleDelete(item._id)}>Delete</button>
                <button className={styles.add} onClick={()=>handleBasket(item)}>Add to Basket</button>
                <button ><Link to={"/detailshop/"+item._id}>Detail</Link></button>
                
               </div>

              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Products
