import React from "react";
import styles from "./index.module.scss"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.foot}> 
          <div className={styles.foot_head}>
            <h5>Blog</h5>
            <h5> FAQs</h5>
            <h5> Contact us</h5>
          </div>

          <ul>
            <li>
              <a href="">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-brands fa-skype"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i class="fa-brands fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>

        <p>
          ©2018 All Rights Reserverd. This template is made with by Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
