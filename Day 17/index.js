import express from "express";
import mongoose from "mongoose";
import {getTutors, getTutor, createTutor, updateTutor, deleteTutor} from "./controllers/controllers.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the server!");
});

app.get("/api/tutors",getTutors);

app.get("/api/tutors/:id", getTutor);

app.post("/api/tutors", createTutor);

app.put("/api/tutors/:id", updateTutor );

app.delete("/api/tutors/:id", deleteTutor);

(async function () {
        try {
            await mongoose.connect("mongodb://localhost:27017/GDSC");
            await console.log("Connected to MongoDB!");
            await app.listen(3000, () => {
                console.log("Listening on port 3000!")
            });
        } catch (e) {
            console.log(e.message)
        }
    }
)();