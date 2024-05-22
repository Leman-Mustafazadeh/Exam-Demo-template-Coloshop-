import React from 'react'
import styles from "./index.module.scss"
const Subscribe = () => {
  return (
   <section className={styles.subs_sec}>
    <div className="container">
    <div className={styles.subs}>
      <div>
      <h3>Newsletter</h3>
        <p>Subscribe to our newsletter and get 20% off your first purchase</p>
            
      </div>

      <div>
        <input type="text" placeholder='Your email...'/>
        <button>Subscribe</button>
      </div>
            </div>
    </div>
   </section>
  )
}

export default Subscribe
