import mongoose from "mongoose";
import env from "dotenv"
env.config()


export const youTubeDB = () => {
    mongoose.connect(process.env.MONGO_STRING!).then(() => {
        console.log("connected to MongoDB")
    })
}