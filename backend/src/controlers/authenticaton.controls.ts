import { Request, Response } from "express";
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
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    let token = await generateToken(user?.id!, res);
    console.log("login request ran");
    res.status(200).json({ message: "Logged In Successfully", token: token });
  } catch (error: any) {
    res.status(404).json({ message: "login :- bad server request" });
  }
};

// Send a cookie with null data
// THe cookie should be expiring the very time
// const logout = async (req: Request, res: Response) => {
//   try {
//     const { token } = req.cookies;
//     if (!token) {
//         return res.sendStatus(401).json({ message: "invalid Action !" });
//     }
//     res.cookie("token", "", { maxAge: 0, httpOnly: true });
//     console.log("logged out successfully");
//     res.sendStatus(200).json({ message: "Logged Out Successfully" });
//     return;
//   } catch (error: any) {
//     res.status(500).json({ message: "bad request" });
//   }
// };

const logout = async (req: Request, res: Response) => {
    try {
      const { token } = req.cookies;
  
      if (!token) {
        // Send the response and return immediately to prevent further execution
        return res.status(401).json({ message: "Invalid Action!" });
      }
  
      // Set the token cookie to expire immediately
      res.cookie("token", "", { maxAge: 0, httpOnly: true });
  
      console.log("logged out successfully");
  
      // Send a success response and return
      return res.status(200).json({ message: "Logged Out Successfully" });
    } catch (error: any) {
      // Handle errors and send an error response
      return res.status(500).json({ message: "Bad Request" });
    }
  };
  

export { signup, login, logout };
