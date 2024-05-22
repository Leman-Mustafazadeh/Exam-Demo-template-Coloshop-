import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./index.module.scss"
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className={styles.head}>
                <a href="">Colo<span>Shop</span></a>

                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Promotion</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>

                <div>
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
