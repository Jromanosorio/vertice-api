import { NextFunction, Response } from "express";
import { JwtPayload, Secret, verify } from "jsonwebtoken";
import { verifyToken } from "../utils/token";
import { LoggedUserRequest } from "../interfaces/Request";
import userModel from "../models/User";

interface CustomPayload extends JwtPayload {
  _id: string;
  name: string;
  email: string;
}

const isUserLogged = async (req: LoggedUserRequest, res: Response, next: NextFunction): Promise<any> => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.status(401).json({ message: "TOKEN_NOT_FOUND"})

    const isValidToken = verifyToken(<string>token);

    if (!isValidToken) return res.status(401).json({ message: "INVALID_TOKEN" });

    const decoded: JwtPayload | string = verify(token, <Secret>process.env.SECRET) as CustomPayload;
    const user = await userModel.findById(decoded.data._id).select('-password');
    
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    req.user = user

    next();
    
  } catch (error) {
    return res.status(401).json({ message: "INVALID_SESSION" });
  }
};

export { isUserLogged };
