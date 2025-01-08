import { Router } from "express";
import {
  userAuthController,
  userCreateController,
  userFetchController,
  userAuthSignController,
  userScoreUpdateController,
} from "./user/controller.js";

const userRouter = Router();

userRouter.get("/fetch", userFetchController);

userRouter.post("/create", userCreateController);

userRouter.post("/auth", userAuthController);

userRouter.post("/authsign", userAuthSignController);

userRouter.post("/scoreupdate", userScoreUpdateController);

export { userRouter };
