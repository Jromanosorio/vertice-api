import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface LoggedUserRequest extends Request {
    user?: JwtPayload | string
}