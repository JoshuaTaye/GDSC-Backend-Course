import mongoose from "mongoose";

const PlayerSchema = new mongoose.Schema({
    name: {
        type:String,
        minLength: 1,
        maxLength: 50,
    },
    age: {
        type: Number,
        validate: {
            validator: function (age) {
                return age >= 2;
            },
            message: (age) => `${age.value} is not greater than one. Enter a higher value.`
        },
    },
    status: String,
    height: {
        type: Number,
        max: 3,
        min: 1.4,
        required: true,
    },
    stats: {
        assists: Number,
        points: Number,
        blocks: Number,
    },
    isRetired: Boolean,
    MVPYear: {
        type:[Number],
    },
    debut: Date,
    favPlayer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    },
    isOnBreak: {
        type: Boolean,
        expires: 3600
    },
}, {timestamps: true});

PlayerSchema.methods.introduce =  function () {
    console.log(`${this.name} is ${this.age} years old and ${this.height} meters tall`);
}

PlayerSchema.statics.findByHeight = function (h) {
    return this.where({height : h})
}

PlayerSchema.post("save", function(doc, next) {
    console.log(doc.name)
});



export const Player = mongoose.model("Player", PlayerSchema);