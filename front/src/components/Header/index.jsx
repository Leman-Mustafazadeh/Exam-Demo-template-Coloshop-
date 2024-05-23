import React from 'react'
import styles from "./index.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
   <header>
    <div className="container">
      <div className={styles.head}>
        <p>COLO  <span>SHOP</span></p>
     
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Promotion</a></li>
        <li><a href="">Pages</a></li>
        <li><a href="">bLOG</a></li>
        <li><a href="">cONTACT</a></li>
        <li><a href="/addshops"><Link to={"/addshops"}>Add Shops</Link></a></li>
        <li><a href=""><Link to={"/basketpage"}>Basket</Link></a></li>


      </ul>

      <div className={styles.icons}>
        <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
        <a href=""><i class="fa-solid fa-person"></i></a>
        <a href=""><i class="fa-solid fa-basket-shopping"></i></a>

      </div>
      </div>
    </div>
   </header>
  )
}

export default Header
