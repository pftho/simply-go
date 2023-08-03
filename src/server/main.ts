import express from "express";
import ViteExpress from "vite-express";

import "dotenv/config";
import "./db";

import configureApp from "./config";

const app = express();

configureApp(app);

import allRoutes from "./routes/index.routes";
import errorMiddleware from "./middleware/errorMiddleware";
app.use("/api", allRoutes);
app.use(errorMiddleware);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
