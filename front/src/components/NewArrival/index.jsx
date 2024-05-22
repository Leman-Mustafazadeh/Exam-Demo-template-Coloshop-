import React, { useContext } from 'react'
import { ColorContext } from '../../context/ColorContextProvider';
import styles from "./index.module.scss"
import {Link} from "react-router-dom"
import { deleteOne } from '../../API';
import Swal from "sweetalert2"
const NewArrival = () => {
    const {colors,setColors} = useContext(ColorContext)

    const handleDelete=(id)=>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                deleteOne(id)
                const del = colors.filter((x)=>x._id!==id)
                setColors(del)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    
    }
  return (
   <section className={styles.new}>
    <div className="container">
        <h2>New Arrivals</h2>
        <div className={styles.all}>
            <button>All</button>
            <button>Women's</button>
            <button>Accesories</button>
            <button>Men's</button>
            <button><Link to={"addcolor"}>Add Color</Link></button>
        </div>

        <div className={styles.datas_head}>
            {
                colors.map((item)=>{
                    return(
                      <div className={styles.datas}>
                         <div> <img src={item.imgSrc} alt=""/>
                          <h3>{item.name}</h3>
                          <p>${item.price}</p>
                          <button onClick={()=>handleDelete(item._id)}>Delete</button></div>
                      </div>
                    )
                })
            }
        </div>
    </div>
   </section>
  )
}

export default NewArrival
