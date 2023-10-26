import express, { Application, Request, Response } from "express";
import cors from "cors";
import auth from "./router/authRouter"

export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PATCH", "DELETE"],
    })
  );
  app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
      message:
        "You're using Francis Kossyrisochukwu Uzoigwe's YouTube end-point",
    });
  });
  app.use("/api", auth)
};
