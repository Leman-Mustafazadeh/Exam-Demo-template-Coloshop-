const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const PORT = 5050
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
app.use(bodyParser.json())

const ColorSchema = new mongoose.Schema({
    imgSrc:String,
    name:String,
    price:Number,
    discountPrice:Number
},{timestamps:true})


const Model= mongoose.model("ColorShop",ColorSchema)


app.get("/color",async(req,res)=>{
const col= await Model.find()
try {
    res.send({data:col})
} catch (error) {
    res.send({error:error})
}
})

app.get("/color/:id",async(req,res)=>{
const {id}=req.params
const col= await Model.findById(id)
try {
    res.send({data:col})
} catch (error) {
    res.send({error:error})
}
})


app.delete("/color/:id",async(req,res)=>{
    const {id}=req.params
    const col= await Model.findByIdAndDelete(id)
    try {
        res.send({data:col})
    } catch (error) {
        res.send({error:error})
    }
    })


    app.post("/color",async(req,res)=>{
        const col=  new Model(req.body)
        const cols = await col.save()
        try {
            res.send({data:cols})
        } catch (error) {
            res.send({error:error})
        }
        })


        app.patch("/color",async(req,res)=>{
            const {id}=req.params
            await Model.findByIdAndUpdate(id,req.body)
            const col = await Model.findById(id)
            try {
                res.send({data:col})
            } catch (error) {
                res.send({error:error})
            }
            })







mongoose.connect('mongodb+srv://laman:laman123@coloshop.glqxg6i.mongodb.net/')
  .then(() => console.log('Connected!'));
app.listen(PORT, function () {
    console.log(`CORS-enabled web server listening on port ${PORT}`)
  })