import express from "express";
import Authentication from "./Authentication";

const rootRouter = express.Router();

export default (): express.Router => {
  Authentication(rootRouter);
  return rootRouter;
};
