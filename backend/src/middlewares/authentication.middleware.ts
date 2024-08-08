import { Request, Response, NextFunction } from "express";
import prisma from "../database/db.prisma";
import bs from "bcryptjs";
// Verifying a user as they log in
// > No field should be undefined
// > Checks if the user exists in the database
// > Check if the password matches the confirmation
// > If all checks pass, call the next middleware

const checkCredentials = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    // Check for undefined fields
    if (!name || !email || !password || !confirmpassword) {
      return res.status(400).json({ message: "Undefined Fields" });
    }

    // Check if the user already exists
    const emailVerification = await prisma.user.findUnique({
      where: { email },
    });

    if (emailVerification) {
      return res
        .status(400)
        .json({ message: "User exists with the provided email" });
    }

    // Check if passwords match
    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // If all checks pass, call the next middleware
    next();
  } catch (error: any) {
    res.status(500).json({ error: "Error in verifying the credentials" });
  }
};

// Middle ware for logging in the application
// > email should exist
// > password should match
// > Then create a token and send it into the cookies of the user

const LogInCheck = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: email });

  try {
    //verifying that the user actually exist

    if (!user) {
      res.status(404).json({ message: "User Doesn't exist" });
    }

    const passwordVerification = await bs.compare(password, user?.password!);

    // verifying that the password mathaced

    if (!passwordVerification) {
      res
        .status(401)
        .send({ message: "Incorrect Password! Please enter correct password" });
    }

    next();
  } catch (error: any) {
    res.status(404).json({ message: error });
  }
};

export default checkCredentials;
