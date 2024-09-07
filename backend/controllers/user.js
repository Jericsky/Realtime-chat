import User from "../models/User.js";

export const getUsersForSidebars = async (req, res) => {
    try {

        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select('-password')

        

        res.status(200).send({filteredUsers})
         
    } catch (error) {
        console.log("Error in get user side bar: ", error.message);
        res.status(500).send({error: 'Internal server error.'});
    }
};