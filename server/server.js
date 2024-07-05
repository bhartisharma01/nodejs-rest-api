
const express = require('express')
const app = express()
const cors = require('cors');  // is a middleware that allows cross-origin resource sharing, 
//which enables a server to allow requests from other domains or origins.

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

app.use(cors());


// products routers
const router = require('./routes/productRouter.js')
app.use('/api/products', router)

//user router
const userRouter  = require('./routes/userRouter.js')
app.use('/api/users', userRouter)

app.get('/',(req, res)=>{
    res.json({
        message:'hello'
    })
})

//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})