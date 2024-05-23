import React from 'react'
import styles from "./index.module.scss"
const Blogs = () => {
  return (
   <section className={styles.blog_head}>
    <div className="container">
      <h1>Latest Blogs</h1>

      <div className={styles.blogs}>
        <div>
          <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg.webp" alt="" />
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg.webp" alt="" />
        </div>
        <div>
          <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg.webp" alt="" />
        </div>
      </div>
    </div>
   </section>
  )
}

export default Blogs
