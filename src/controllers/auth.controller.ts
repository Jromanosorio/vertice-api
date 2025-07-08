import { Request, Response } from "express";
import userModel from "../models/User";
import { Encrypt, Verify } from "../utils/bcrypt";
import { generateToken } from "../utils/token";

const SignIn = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({
      email
    });

    if (user == null) return res.status(401).json({ message: "USER_NOT_FOUND" })

    const isCorrect = await Verify(password, user.password)

    if (!isCorrect) throw new Error

    const token = await generateToken({userID: user._id , name: user.name, email: user.email  })

    return res.status(200).json({ user, token });

  } catch (error) {
    return res.status(500).json({ message: "WRONG_USER_OR_PASSWORD" });
  }
};

const SignUp = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, password } = req.body;

    const userExist = await userModel.findOne({ email })

    if(userExist){
      return res.status(409).json({ message: "EMAIL_ALREADY_REGISTERED"})
    }

    const hashPassword = await Encrypt(password);

    const user = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    return res.status(200).json({ user });
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({ data: "ERROR_CREATING_ACCOUNT" });
  }
};

export { SignIn, SignUp };
