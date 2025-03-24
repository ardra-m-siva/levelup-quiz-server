require('dotenv').config()
const cors = require('cors')
const express = require('express')
require('./databases/dbConnection')
const router=require('./routers/router')

const luSever = express()
luSever.use(cors())
luSever.use(express.json())
luSever.use(router)

luSever.use('/uploads',express.static('./uploads'))

const PORT = 3000 || process.env.PORT
luSever.listen(PORT, () => {
    console.log("Level up Server started");
})

luSever.get('/',(req,res)=>{
    res.send("<h1 style='color:red'>Level Up Sever Started</h1>")
})

