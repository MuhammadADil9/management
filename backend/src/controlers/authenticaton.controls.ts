import { Request, Response } from "express";
import checkCredentials from "../middlewares/authentication.middleware";
import prisma from "../database/db.prisma";
import bs from "bcryptjs";
import generateToken from "../token/jwt.token";

// user is verified  Done
// > hash the provided password Done
// > create user model in the database Done
// > return back the cookie that is created Done
// > function completed

const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    //generating a salt gen and then hashing thr password
    let saltgen = await bs.genSalt(10);
    let hashedPassword = await bs.hash(password, saltgen);

    const userProfile = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    if (userProfile) {
      console.log("user created successfully");
      let tokenValue = await generateToken(userProfile.id, res);

      res
        .status(200)
        .json({ message: "Profile created successfully", token: tokenValue });

      console.log("cookie saved at user profile successfully");
    }
  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// > should not be undefined done
// > email should exist  done
// > password should match done
// > Then create a token and send it into the cookies of the user

const login = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: email });
    let token = await generateToken(user?.id!, res);

    res.status(200).json({ message: "Logged In Successfully", token: token });
  } catch (error: any) {
    res.status(404).json({ message: error });
  }
};

const logout = async (req: Request, res: Response) => {};

export { signup, login, logout };
