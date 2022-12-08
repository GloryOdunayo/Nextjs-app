import mongoose from 'mongoose'
const URI = process.env.MONGO_URI
let connection = async ()=>{
    await mongoose.connect(URI,(err)=>{
        if(err){
            console.log("Mongoose no gree connect")
        }
        console.log("Mongoose has connected successfully")
    })

}

export default connection;