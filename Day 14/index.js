import mongoose from "mongoose";
import {Player} from "./dataSchema.js"

(async function connectMongodb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/GDSC");
        console.log("Connected!")
    } catch (e) {
        console.log(e)
    }
})()



async function createPlayer() {
    try {
        const player = await Player.findOne({name: "Kevin Durant"})
        await player.save();
    } catch (e) {
        console.log(e.message)
    }
}


createPlayer()


// connectMongodb()

