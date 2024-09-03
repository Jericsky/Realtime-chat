import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6
    },
    gender: {
        type: String,
        required: [true, 'Gender name is required'],
        enum: ["male", "female"]
    }
},{timestamps: true})

const User = mongoose.model("User", userSchema);
export default User;