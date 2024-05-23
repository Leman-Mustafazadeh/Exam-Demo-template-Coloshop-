import React from 'react'
import styles from "./index.module.scss"
const Genre = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.genre}>
          <div className={styles.woman}>
           <div className={styles.tag}>
           <a href=''>WOMEN'S</a>
           </div>
          </div>

          <div className={styles.access}>
           <div className={styles.tag}>
           <a href=''>Accesories'S</a>
           </div>
          </div>


          <div className={styles.men}>
           <div className={styles.tag}>
           <a href=''>MEN'S</a>
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Genre
