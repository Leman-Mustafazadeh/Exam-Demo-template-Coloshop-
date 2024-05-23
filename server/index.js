const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');
 const PORT = 3000
app.use(cors())
app.use(bodyParser.json())



const ColorSchema = new mongoose.Schema({
    imgSrc:String,
    name:String,
    price:Number,
    discount:Number
},{timestamps:true})

const Model = mongoose.model("Color",ColorSchema)

app.get("/shops",async(req,res)=>{
    const response =await Model.find()
    try {res.send({
        data:response
    })
    } catch (error) {
        res.send({error:error})
    }
})

app.get("/shops/:id",async(req,res)=>{
    const {id} = req.params
    const response =await Model.findById(id)
    try {res.send({
        data:response
    })
    } catch (error) {
        res.send({error:error})
    }
})



app.delete("/shops/:id",async(req,res)=>{
    const {id} = req.params
    const response =await Model.findByIdAndDelete(id)
    try {res.send({
        data:response
    })
    } catch (error) {
        res.send({error:error})
    }
})

app.post("/shops",async(req,res)=>{
    const response = new Model(req.body)
await response.save()
    try {res.send({
        data:response
    })
    } catch (error) {
        res.send({error:error})
    }
})






mongoose.connect('mongodb+srv://laman:laman2004@examcolor.bee8a6d.mongodb.net/')
  .then(() => console.log('Connected!'));
app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
  })
