import express from "express";
import { register } from "../controllers/AuthenticationController";

export default (router: express.Router) => {
  router.post("/auth/register", register);
};
