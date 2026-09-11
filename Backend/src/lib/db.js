import mongoose from "mongoose"

export const connectDB = async ()=>{
    try{
        const mongoUri = process.env.MONGODB_URI
        if(!mongoUri){
            throw new Error("Mongo Uri is required")
        }
        const conn = await mongoose.connect(mongoUri)
        console.log("MongoDb connect",conn.connection.host)
    }catch(err){
        console.error("MongoDb connection error:",err.message)
        process.exit(1);
    }
}