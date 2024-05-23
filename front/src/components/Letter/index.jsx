import React from 'react'
import styles from "./index.module.scss"
const Letter = () => {
  return (
   <section className={styles.letter_head}>
    <div className="container">
      <div className={styles.letter}>
        <div>
          <h5>Newsletter</h5>
          <p>Subscribe to our newsletter and get 20% off your first purchase</p>
        </div>
        <div><input type="text" placeholder='Your Email ...' />
        <button>Subscribe</button></div>
      </div>
    </div>
   </section>
  )
}

export default Letter
