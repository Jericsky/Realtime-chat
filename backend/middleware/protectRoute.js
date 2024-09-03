import jwt from 'jsonwebtoken'
import User from '../models/User.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token){
            return res.status(401).send({error: "Unauthorized - No token provided"})   ;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(!decoded){
            return res.status(401).send({error: "Unauthorized - Invalid token"});
        }

        const user = await User.findById(decoded.userId).select('-password');
        if (!user){
            return res.status(404).send({error: 'User not found'})
        }

        req.user = user;

        next();
        
    } catch (error) {
        console.log('Error in protectRoute middleware ', error.message);
        res.status(500).send({error: 'Internal Server Error'});
    }
}

export default protectRoute;