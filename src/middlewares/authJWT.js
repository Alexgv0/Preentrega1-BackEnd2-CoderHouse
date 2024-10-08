import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config";

export const checkAuth = async (req, res, next) => {
    try {
        const token = req.get("Authorization");
        //const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({message: "Unauthorized"});
        }
        const tokenClean = token.split(' ')[1];
        const decode = jwt.verify(tokenClean, SECRET_KEY);
        req.user = decode;
        next();
    } catch (error) {
        
    }
}