const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    nameInput: {
        type: String, 
        trim: true,
        required: "Name is required"
    },
    weightInput: {
        type: Number,
        trim: true,
        required: "Weight is required"
    },
    setsInput: {
        type: Number,
        trim: true,
        required: "Number of sets is required"
    },
    repsInput: {
        type: Number, 
        trim: true,
        required: "Number is reps is required"
    },
    durationInput: {
        type: Number,
        trim: true,
        required:"Duration of exercise is required"
    }
})

const Resistance = mongoose.model("Resistance", ResistanceSchema);

const CardioSchema = new Schema ({
    cardioNameInput: {
        type: String,
        trim: true,
        required: "Workout name is required"
    },
    durationInput: {
        type: Number,
        trim: true,
        require: "Duraction of exercise is required",
    },
    distanceInput: {
        type: Number,
        trim:true,
        required: "Distance is required"
    }
})

const Cardio = mongoose.model("Cardio", CardioSchema)

const Workout =[Cardio,Resistance]

module.exports = workoutType;
