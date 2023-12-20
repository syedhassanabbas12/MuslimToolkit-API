import express, { Request, Response } from "express";
import { authentication, random } from "../helpers";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = false;
    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = {
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    };

    return res.sendStatus(200).json(user).end();
  } catch (error) {
    console.log("error", error);
    return res.sendStatus(400);
  }
};
