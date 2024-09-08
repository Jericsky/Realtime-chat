import User from '../models/User.js';
import createToken from '../authentication.js'
import bcryptjs from 'bcryptjs'


export const signupUser = async (req, res) => {
    try {
        const { firstName, lastName, username, password, confirmPassword, gender } = req.body;

        if (password.length < 8){
            return res.status(400).send({error: "Password must be 8 characters long"})
        }

        if (password !== confirmPassword){
            return res.status(400).send({error: "Password did not match"})
        }

        const duplicateUsername = await User.findOne({ username });
        if (duplicateUsername) {
            return res.status(400).send({error: "duplicate username"});
        }

        const hashedPassword = bcryptjs.hashSync(password, 10)

        let newUser = new User({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            gender
        });

        if (newUser){
            createToken(newUser._id, res);
            await newUser.save();

            return res.status(201).send({ newUser });
        } else {
            return res.status(404).send({error: "Invalid credentials"})
        }

        

    } catch (error) {
        console.log('Error in signup, ', error.message);
        return res.status(500).send({ error: error.message });
    }
};


export const loginUser = async (req, res) => {
    try{

        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect){
            return res.status(404).send({error: "Invalid username or password."})
        }

        createToken(user._id, res);

        return res.status(200).send({user})

    } catch(error){
        console.log('Error in login, ', error.message)
        return res.status(500).send({ error: error.message });
    }
}

export const logoutUser = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        return res.status(200).send({message: "Logout successfully"})
        
    } catch (error) {
        console.log('Error in logout, ', error.message)
        return res.status(500).send({ error: error.message });
    }
}
