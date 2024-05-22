import React from 'react'
import styles from "./index.module.scss"
const BestSellers = () => {
  return (
<section className={styles.sec}>
    <div className="container">
        <h1>Best Sellers</h1>
        <div className={styles.sellers}>
            <div className={styles.best}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/product_3.png.webp" alt="" />
                <h4>Blue Yeti USB Microphone Blackout Edition</h4>
                <p>$120.00</p>
            </div>
            <div className={styles.best}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png.webp" alt="" />
                <h4>Fujifilm X100T 16 MP Digital Camera (Silver)</h4>
                <p>$520.00 <span><del>$590.00</del></span></p>
            </div>

            <div className={styles.best}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/product_2.png.webp" alt="" />
                <h4>Samsung CF591 Series Curved 27-Inch FHD Monitor</h4>
                <p>$610.00</p>
            </div>

            <div className={styles.best}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/product_4.png.webp" alt="" />
                <h4>DYMO LabelWriter 450 Turbo Thermal Label Printer</h4>
                <p>$410.00</p>
            </div>

            <div className={styles.best}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/product_5.png.webp" alt="" />
                <h4>Pryma Headphones, Rose Gold & Grey</h4>
                <p>$180.00</p>
            </div>

            <div className={styles.best}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png.webp" alt="" />
                <h4>Fujifilm X100T 16 MP Digital Camera (Silver)</h4>
                <p>$520.00 <span><del>$590.00</del></span></p>
            </div>
        </div>
    </div>
</section>
  )
}

export default BestSellers
