import jwt from "jsonwebtoken";

const createToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY,{
        expiresIn: '30d'
    })

    res.cookie("jwt", token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict"
    })
}

export default createToken;