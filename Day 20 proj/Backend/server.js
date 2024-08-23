import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import postRoutes from "./routes/posts.js";
dotenv.config();
const corsOptions ={
    origin:"*",
    credentials:true,
    optionSuccessStatus:200,
}
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/posts', postRoutes);


(async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
        await app.listen(process.env.PORT, () => {
            console.log("Listening on Port 5000")
        });
    } catch (e){
        console.log(e.message);
    }
})();

