import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import {useFormik} from "formik"
import { Button } from '@mui/material';
import { post } from '../../API';
import Shop from '../../classes/Shop';
import { ColorContext } from '../../context/ContextShops';
import { Space, Table, Tag } from 'antd';
const AddShops = () => {
  const {shops,setShops} = useContext(ColorContext)

  const columns = [
    {
      title: 'imgSrc',
      dataIndex: 'imgSrc',
      key: 'imgSrc',
   
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'discount',
      dataIndex: 'discount',
      key: 'discount',
    }
   
  ];
  
  const formik = useFormik ({
  initialValues:{
    imgSrc:'',
    name:'',
    price:'',
    discount:''
  },
  onSubmit:(values)=>{
    console.log(values);
    const newShop = new Shop(values.imgSrc,values.name,values.price,values.discount)
    post(newShop)
    formik.resetForm()
setShops((current)=>[...current,newShop])
  }
  })
  return (
<>
<form action="" onSubmit={formik.handleSubmit} style={{textAlign:'center',display:'flex',flexDirection:"column",alignItems:'cneter',justifyContent:'center',paddingTop:'150px',width:"40%",margin:'0 auto',gap:"10px"}}>
    <h1>Add Shops</h1>
<TextField style={{width:'100%'}} type='url' onChange={formik.handleChange} value={formik.values.imgSrc} name='imgSrc' id="outlined-basic" label="imgSrc" variant="outlined" />
<TextField style={{width:'100%'}} type='text' onChange={formik.handleChange} value={formik.values.name} name='name' id="outlined-basic" label="name" variant="outlined" />
<TextField style={{width:'100%'}} type='number' onChange={formik.handleChange} value={formik.values.price} name='price' id="outlined-basic" label="price" variant="outlined" />
<TextField style={{width:'100%'}} type='number' onChange={formik.handleChange} value={formik.values.discount} name='discount' id="outlined-basic" label="discount" variant="outlined" />
   <Button variant='contained' type='submit'>Submit</Button>
   </form>


<Table columns={columns} dataSource={shops} />;
</>
  )
}

export default AddShops
