import React from 'react'
import styles from "./index.module.scss"
const Genre = () => {
  return (
   <section>
    <div className="container">
        
    <div className={styles.string_genre}>
                <div className={styles.genre_women}>
                 <div className={styles.tag}>
                 <p>Women</p>
                 </div>
                </div>

                <div className={styles.genre_acces}>
                <div className={styles.tag}>
                 <p>accessories's</p>
                 </div>
                </div>
                <div className={styles.genre_men}>
                <div className={styles.tag}>
                 <p>men's</p>
                 </div>

                </div>
            </div>
    </div>
   </section>
  )
}

export default Genre
