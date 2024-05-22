import React from 'react'
import styles from "./index.module.scss"
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className={styles.foot} >
           <div className={styles.foot_blog}>
           <h3>Blog</h3>
                <h3>FAQs</h3>
                <h3> Contact us</h3>
           </div>

                <div>
          <ul>
            <li><a href="">      <i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href=""><i class="fa-brands fa-skype"></i></a></li>
            <li><a href=""><i class="fa-brands fa-pinterest"></i></a></li>
          </ul>
                </div>
            </div>

            <p>©2018 All Rights Reserverd. This template is made with  by Colorlib</p>
        </div>
    </footer>
  )
}

export default Footer
