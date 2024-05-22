import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useFormik} from "formik"
import { post } from '../../API';
import Color from '../../classes/ColorClasses';
import { useContext } from 'react';
import { ColorContext } from '../../context/ColorContextProvider';

const AddColor = () => {
    const {colors,setColors} = useContext(ColorContext)
    const formik = useFormik({
        initialValues:{
            imgSrc:'',
            name:'',
            price:'',
            discountPrice:''
        },
        onSubmit:(values)=>{
            const newColor = new Color(values.imgSrc,values.name,values.price,values.discountPrice) 
           post(newColor)
           formik.resetForm()
           setColors((current)=>[...current,newColor])
        
        }
    })
    
  return (
    <form onSubmit={formik.handleSubmit} action="" style={{display:'flex',flexDirection:'column',alignItems:"center",width:"50%",margin:'0 auto'}}>
        <h1>Add Color</h1>
       <TextField  onChange={formik.handleChange} value={formik.values.imgSrc} name='imgSrc'  style={{width:"100%"}} id="outlined-basic" label="imgSrc" variant="outlined" />
       <TextField onChange={formik.handleChange} value={formik.values.name} name='name'   style={{width:"100%"}} id="outlined-basic" label="name" variant="outlined" />
       <TextField onChange={formik.handleChange} value={formik.values.price} name='price'  style={{width:"100%"}}  id="outlined-basic" label="price" variant="outlined" />
       <TextField onChange={formik.handleChange} value={formik.values.discountPrice}  name='discountPrice' style={{width:"100%"}}  id="outlined-basic" label="discountPrice" variant="outlined" />
       <Button variant='contained' type='submit'>Submit</Button>
    </form>
  )
}

export default AddColor
