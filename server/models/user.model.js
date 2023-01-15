import mongoose from "mongoose";
import Gym from "./gym.model.js";

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fullName: String,
    password: String,
    type: {
        type: String,
        default: 'Member'
    },
}, { timestamps: true })

const User = mongoose.model("User", UserSchema)

export default User;