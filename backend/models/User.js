import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    gender: {
        type: String,
        require: true,
        enum: ["male", "female"]
    }
})

const User = mongoose.model("User", userSchema);
export default User;