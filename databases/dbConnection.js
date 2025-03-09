const mongoose=require('mongoose')

const connectionString=process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("Mongo db atlas connnection success");
}).catch(err=>{
    console.log("Database connection failed");
})