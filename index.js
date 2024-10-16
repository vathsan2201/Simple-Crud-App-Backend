const express = require('express')
const mongoose = require('mongoose')
const Product = require('./model/productModel.js')
const productRoute = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use('/api/products',productRoute)

app.get('/',(req,res) => {
    res.send('Hello from node JS .')
})

// app.get('/api/products',async(req,res) => {
//     try {
//         const product = await Product.find({})
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.get('/api/products/:id',async (req,res) =>{
//     try {
//         const {id} = req.params
//         const product = await Product.findById(id)
//         res.status(200).json(product)

//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// app.post('/api/products',async(req,res) =>{
//     try {
//         const product = await Product.create(req.body)
//         res.status(200).json(product)  
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

// //update a product
// app.put('/api/products/:id',async(req,res)=>{
//     try {
//         const {id} = req.params
//         const product = await Product.findByIdAndUpdate(id, req.body)
        
//         if(!product){
//             res.status(404).json({message: "Product not found"})
//         }

//         const updatedProduct = await Product.findById(id)
//         res.status(200).json(updatedProduct)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

// //delete a product
// app.delete('/api/products/:id',async(req,res) => {
//     try {
//         const {id} = req.params
//         const product = await Product.findByIdAndDelete(id)

//         if(!product){
//             res.status(404).json({message:"Product not found"})
//         }

//         res.status(200).json({message: "Product deleted successfully"})
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

mongoose.connect("mongodb+srv://srivathsan477:srivathsan%40477@backend.ekaos.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
.then(() => {
    console.log("DB connected")
    app.listen(3000, () => {
        console.log('Server is running on 3000')
    })
})
.catch(() => {
    console.log("DB failed")
})