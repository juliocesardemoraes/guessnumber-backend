import { Router } from "express";
import {
  userAuthController,
  userCreateController,
  userFetchController,
  userAuthSignController,
  userScoreUpdateController,
  leaderboardController,
} from "./user/controller.js";

const userRouter = Router();

userRouter.get("/fetch", userFetchController);

userRouter.post("/create", userCreateController);

userRouter.post("/auth", userAuthController);

userRouter.post("/authsign", userAuthSignController);

userRouter.post("/scoreupdate", userScoreUpdateController);

userRouter.get("/leaderboard", leaderboardController);

export { userRouter };
