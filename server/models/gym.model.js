import mongoose from "mongoose";

const GymSchema = mongoose.Schema({
    name: String,
    address: String
}, { timestamps: true })

const Gym = mongoose.model("Gym", GymSchema)

export default Gym;