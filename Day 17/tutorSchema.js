import mongoose from "mongoose";

const TutorSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    },
    age :{
        type: Number,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    experience_years: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    location:{
        type: String,
        required: true
    },
    available_days: {
        type: [String],
        required: true,
        enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    }
}, {timestamps: true});

export const Tutor = mongoose.model("tutors", TutorSchema);