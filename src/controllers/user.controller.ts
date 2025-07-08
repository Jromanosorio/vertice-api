import { Request, Response } from "express";
import { LoggedUserRequest } from "../interfaces/Request";

const UserInfo = async (req: LoggedUserRequest, res: Response): Promise<any> => {
    return res.status(500).json({ data: req.user });
};

export { UserInfo }