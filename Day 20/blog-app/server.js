import express from "express";
import mongoose from "mongoose"
import authRoutes from './routes/auth.js'
import postRoutes from './routes/posts.js'
import cors from 'cors'
const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}

const app = express();

app.use(cors(corsOptions))
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);


(async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/GDSC");
        console.log("Connected to Mongodb")
        await app.listen(5000, () =>{
            console.log("Listening on port 5000")
        })
    } catch (e) {
        console.log(e.message)
    }
})()

