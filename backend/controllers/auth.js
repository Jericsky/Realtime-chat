import User from '../models/User.js';
import bcryptjs from 'bcryptjs'

export const signupUser = async (req, res) => {
    try {
        const { firstName, lastName, username, password, gender } = req.body;

        const duplicateUsername = await User.findOne({ username });
        if (duplicateUsername) {
            return res.status(400).send("duplicate username");
        }
        const hashedPassword = bcryptjs.hashSync(password, 10)

        let newUser = new User({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            gender
        });

        console.log(hashedPassword)

        await newUser.save();

        return res.status(201).send({ newUser });

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};


export const loginUser = (req, res) => {
    res.send('login')
}

export const logoutUser = (req, res) => {
    res.send('logout')
}
