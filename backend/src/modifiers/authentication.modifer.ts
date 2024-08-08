import { Request, Response, NextFunction } from "express";
import prisma from "../database/db.prisma";

// Verifying a user as they log in
// > No field should be undefined
// > Checks if the user exists in the database
// > Check if the password matches the confirmation
// > If all checks pass, call the next middleware

const checkCredentials = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Check for undefined fields
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "Undefined Fields" });
    }

    // Check if the user already exists
    const emailVerification = await prisma.user.findUnique({
      where: { email },
    });

    if (emailVerification) {
      return res.status(400).json({ message: "User exists with the provided email" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // If all checks pass, call the next middleware
    next();

  } catch (error: any) {
    res.status(500).json({ error: "Error in verifying the credentials" });
  }
};

export default checkCredentials;
